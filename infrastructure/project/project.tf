# Variables
#######################################################################
variable stage { type = string }

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

  stage          = var.stage
  log_group_name = module.logdrain.log_group_name
  log_group_arn  = module.logdrain.log_group_arn
}

# Outputs
#######################################################################
output "logdrain_url" {
  value = module.logdrain.url
}

output "elasticsearch_url" {
  value = module.elasticsearch.url
}

output "kibana" {
  value = module.elasticsearch.kibana
}
