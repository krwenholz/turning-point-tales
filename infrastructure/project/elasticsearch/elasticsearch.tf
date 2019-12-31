# Variables
#######################################################################
variable stage { type = string }
variable log_group_name { type = string }
variable log_group_arn { type = string }

data "aws_caller_identity" "current" {}

# Elasticsearch Cluster
#######################################################################
resource "aws_cognito_user_pool_domain" "this" {
  domain       = "${var.stage}-elasticsearch"
  user_pool_id = aws_cognito_user_pool.this.id
}

resource "aws_cognito_identity_pool" "this" {
  identity_pool_name               = "${var.stage}_elasticsearch"
  allow_unauthenticated_identities = false

  lifecycle {
    ignore_changes = [cognito_identity_providers]
  }
}

resource "aws_cognito_user_pool" "this" {
  name = "${var.stage}_elasticsearch"

  admin_create_user_config {
    allow_admin_create_user_only = true
  }

  password_policy {
    minimum_length = 8
  }
}

resource "aws_iam_role" "authenticated" {
  name = "cognito_authenticated"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "cognito-identity.amazonaws.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "cognito-identity.amazonaws.com:aud": "${aws_cognito_identity_pool.this.id}"
        },
        "ForAnyValue:StringLike": {
          "cognito-identity.amazonaws.com:amr": "authenticated"
        }
      }
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "authenticated" {
  name = "authenticated_policy"
  role = aws_iam_role.authenticated.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "mobileanalytics:PutEvents",
        "cognito-sync:*",
        "cognito-identity:*"
      ],
      "Resource": [
        "*"
      ]
    }
  ]
}
EOF
}

resource "aws_cognito_identity_pool_roles_attachment" "this" {
  identity_pool_id = aws_cognito_identity_pool.this.id

  roles = {
    "authenticated" = aws_iam_role.authenticated.arn
  }
}

resource "aws_cloudwatch_log_group" "this" {
  name = "${var.stage}_elasticsearch"
}

resource "aws_cloudwatch_log_resource_policy" "this" {
  policy_name = "${var.stage}-elasticsearch"

  policy_document = <<CONFIG
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "es.amazonaws.com"
      },
      "Action": [
        "logs:PutLogEvents",
        "logs:PutLogEventsBatch",
        "logs:CreateLogStream"
      ],
      "Resource": "arn:aws:logs:*"
    }
  ]
}
CONFIG
}

# Will need to set up users, ingestion settings, and dashboards manually
resource "aws_elasticsearch_domain" "this" {
  domain_name = "${var.stage}-h2wib"

  elasticsearch_version = "7.1"

  cluster_config {
    instance_type = "t2.small.elasticsearch"
  }

  snapshot_options {
    automated_snapshot_start_hour = 23
  }

  ebs_options {
    ebs_enabled = true
    volume_size = 10 # GB
  }

  cognito_options {
    enabled          = true
    user_pool_id     = aws_cognito_user_pool.this.id
    identity_pool_id = aws_cognito_identity_pool.this.id
    role_arn         = aws_iam_role.elasticsearch.arn
  }


  log_publishing_options {
    cloudwatch_log_group_arn = aws_cloudwatch_log_group.this.arn
    log_type                 = "ES_APPLICATION_LOGS"
  }

  access_policies = <<POLICY
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "AWS": [
            "${aws_iam_role.authenticated.arn}"
          ]
        },
        "Action": [
          "es:ESHttp*"
        ],
        "Resource": "arn:aws:es:us-west-2:${data.aws_caller_identity.current.account_id}:domain/${var.stage}-h2wib/*"
      }
    ]
  }
POLICY
}

resource "aws_iam_role" "elasticsearch" {
  name = "elasticsearch"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "es.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "elasticsearch" {
  role       = aws_iam_role.elasticsearch.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonESCognitoAccess"
}

# Ingestion
#######################################################################

resource "aws_iam_role" "lambda_elasticsearch_execution_role" {
  name               = "lambda_elasticsearch_execution_role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow"
    }
  ]
}
EOF
}


resource "aws_iam_role_policy" "lambda_elasticsearch_execution_policy" {
  name   = "lambda_elasticsearch_execution_policy"
  role   = aws_iam_role.lambda_elasticsearch_execution_role.id
  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": [
        "arn:aws:logs:*:*:*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "es:ESHttpPost",
      "Resource": "arn:aws:es:*:*:*"
    }
  ]
}
EOF
}

resource "aws_lambda_function" "logs_to_es_lambda" {
  filename         = "${path.module}/ingester.zip"
  description      = "CloudWatch Logs to Amazon ES"
  function_name    = "Logs_To_Elasticsearch"
  role             = aws_iam_role.lambda_elasticsearch_execution_role.arn
  handler          = "index.handler"
  source_code_hash = filebase64sha256("${path.module}/ingester.zip")
  runtime          = "nodejs12.x"
  timeout          = 60

  environment {
    variables = {
      ES_ENDPOINT = aws_elasticsearch_domain.this.endpoint
    }
  }
}

resource "aws_lambda_permission" "cloudwatch_allow" {
  statement_id  = "cloudwatch_allow"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.logs_to_es_lambda.arn
  principal     = "logs.us-west-2.amazonaws.com"
  source_arn    = var.log_group_arn
}

resource "aws_cloudwatch_log_subscription_filter" "logs_to_elasticsearch" {
  depends_on      = [aws_lambda_permission.cloudwatch_allow]
  name            = "logs_to_elasticsearch"
  log_group_name  = var.log_group_name
  filter_pattern  = "?H2WIB_REQUEST_LOG ?\"msg\""
  destination_arn = aws_lambda_function.logs_to_es_lambda.arn
}

# Outputs
#######################################################################
output "url" {
  value = aws_elasticsearch_domain.this.endpoint
}

output "kibana" {
  value = aws_elasticsearch_domain.this.kibana_endpoint
}
