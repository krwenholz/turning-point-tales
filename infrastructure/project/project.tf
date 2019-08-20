# Variables
#######################################################################
variable stage { type = "string" }

# Resources
#######################################################################
module "logdrain" {
  source               = "git::https://github.com/krwenholz/heroku_cloudwatch_sync.git?ref=master"
  logger_name          = "our_first_big_thing-logdrain-${var.stage}"
  region               = "us-west-2"
  app_name             = "our_first_big_thing-${var.stage}"
}

module "log_processor" {
  source               = "git::https://github.com/krwenholz/goaccess_on_aws.git?ref=master"
  prefix               = "our_first_big_thing-${var.stage}"
  region               = "us-west-2"
  configurations       = [
    {
      log_group : "our_first_big_thing-${var.stage}",
      bucket_name : "our-first-big-thing-${var.stage}"
    }
  ]
}

# Outputs
#######################################################################
output "url" {
  value = module.logdrain.url
}

