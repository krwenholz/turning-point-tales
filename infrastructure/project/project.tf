# Variables
#######################################################################
variable stage { type = "string" }

# Resources
#######################################################################
module "logdrain" {
  source      = "git::https://github.com/krwenholz/heroku_cloudwatch_sync.git?ref=master"
  logger_name = "our_first_big_thing-logdrain-${var.stage}"
  region      = "us-west-2"
  app_name    = "our_first_big_thing-${var.stage}"
}

module "elasticsearch" {
  source = "./elasticsearch"

  stage = "staging"
}

# Outputs
#######################################################################
output "url" {
  value = module.logdrain.url
}
