# Variables
#######################################################################
variable stage { type = "string" }

# Resources
#######################################################################
resource "aws_cognito_identity_pool" "this" {
  identity_pool_name               = "${stage}-elasticsearch"
  allow_unauthenticated_identities = false

  cognito_identity_providers {
    client_id               = "h2wibfoobarbazzlequux"
    provider_name           = aws_cognito_user_pool.this.endpoint
    server_side_token_check = false
  }
}

resource "aws_cognito_user_pool" "this" {
  name = "${stage}-elasticsearch"

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
          "cognito-identity.amazonaws.com:aud": "${aws_cognito_identity_pool.main.id}"
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
  role = "${aws_iam_role.authenticated.id}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": [
          "arn:aws:iam::123456789012:role/Cognito_${aws_cognito_identity_pool.main.name}Auth_Role"
        ]
      },
      "Action": [
        "es:ESHttp*"
      ],
      "Resource": "arn:aws:es:region:123456789012:domain/${stage}-h2wib/*"
    },
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
    },
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

resource "aws_cognito_identity_pool_roles_attachment" "main" {
  identity_pool_id = aws_cognito_identity_pool.this.id

  role_mapping {
    identity_provider         = aws_cognito_user_pool.this.endpoint
    ambiguous_role_resolution = "AuthenticatedRole"
    type                      = "Rules"

    mapping_rule {
      claim      = "isAdmin"
      match_type = "Equals"
      role_arn   = "${aws_iam_role.authenticated.arn}"
      value      = "paid"
    }
  }

  roles = {
    "authenticated" = "${aws_iam_role.authenticated.arn}"
  }
}

# Will need to set up users, ingestion settings, and dashboards manually
resource "aws_elasticsearch_domain" "h2wib" {
  domain_name = "${stage}-h2wib"

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

  access_policies = <<POLICY
  {
    "Version": "2012-10-17",
    "Statement": [
      {
        "Effect": "Allow",
        "Principal": {
          "AWS": "arn:aws:iam::542791770374:user/kyle"
        },
        "Action": "es:*",
        "Resource": "arn:aws:es:us-west-2:542791770374:domain/h2wib/*"
      }
    ]
  }
POLICY
}

# Outputs
#######################################################################
output "url" {
  value = module.logdrain.url
}
