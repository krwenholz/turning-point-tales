# Variables
#######################################################################
variable app_name { type = "string" }
variable stage { type = "string" }

# Resources
#######################################################################
module "logdrain" {
  source               = "git::https://github.com/krwenholz/heroku_cloudwatch_sync.git?ref=master"
  logger_name          = "our_first_big_thing-logdrain-${var.stage}"
  region               = "us-west-2"
  app_name            = var.app_name
}

#module "log_processor" {
#  source               = "git::https://github.com/krwenholz/goaccess_on_aws.git?ref=master"
#  prefix               = "our_first_big_thing-${var.stage}"
#  region               = "us-west-2"
#  configurations       = [
#    {
#      log_group : "our_first_big_thing-${var.stage}",
#      log_filter : "",
#      weblog_pattern : "weblog",
#      bucket_name : "TODO"
#    }
#  ]
#}

# Outputs
#######################################################################
output "url" {
  value = module.logdrain.url
}

