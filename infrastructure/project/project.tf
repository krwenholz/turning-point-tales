# Variables
#######################################################################
variable stage { type = "string" }
variable reply_to { type = "string" }

# Resources
#######################################################################

resource "aws_cognito_user_pool" "pool" {
  name = "${var.stage}-turningpointtales"

  username_attributes = ["email"]

  admin_create_user_config {
    allow_admin_create_user_only = false
  }

  email_configuration {
    reply_to_email_address = "${var.reply_to}"
  }

  password_policy {
    minimum_length = 12
  }
}

resource "aws_cognito_user_pool_client" "client" {
  name = "${var.stage}-client"

  user_pool_id = "${aws_cognito_user_pool.pool.id}"

  generate_secret = false
}

resource "aws_cognito_user_pool_domain" "main" {
  domain       = "${var.stage}-turningpointtales"
  user_pool_id = "${aws_cognito_user_pool.pool.id}"
}

# Outputs
#######################################################################

output "pool_arn" {
  value = aws_cognito_user_pool.pool.arn
}

output "pool_endpoint" {
  value = aws_cognito_user_pool.pool.endpoint
}

output "client_id" {
  value = aws_cognito_user_pool_client.client.id
}
