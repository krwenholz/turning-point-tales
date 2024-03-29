terraform {
  required_version = ">= 0.12"

  backend "s3" {
    region         = "us-west-2"
    bucket         = "h2wib-development-terraform-state"
    key            = "our_first_big_thing.tfstate"
    dynamodb_table = "h2wib-development-terraform-state-lock"
    encrypt        = true
  }
}

# Configure the AWS Provider
provider "aws" {
  version = "~> 2.0"
  region  = "us-west-2"
}

module "project" {
  source = "../../project"

  stage = "staging"
}

# Outputs
#######################################################################
output "logdrain_url" {
  value = module.project.logdrain_url
}
