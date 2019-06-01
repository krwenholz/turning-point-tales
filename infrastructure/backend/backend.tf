terraform {
  required_version = ">= 0.12"
}

provider "aws" {
  region     = "us-west-2"
}

module "prod_backend" {
  source        = "git::https://github.com/cloudposse/terraform-aws-tfstate-backend.git?ref=master"
  namespace     = "h2wib"
  stage         = "prod"
  name          = "terraform"
  attributes    = ["state"]
  region        = "us-west-2"
}

module "staging_backend" {
  source        = "git::https://github.com/cloudposse/terraform-aws-tfstate-backend.git?ref=master"
  namespace     = "h2wib"
  stage         = "staging"
  name          = "terraform"
  attributes    = ["state"]
  region        = "us-west-2"
}

module "test_backend" {
  source        = "git::https://github.com/cloudposse/terraform-aws-tfstate-backend.git?ref=master"
  namespace     = "h2wib"
  stage         = "test"
  name          = "terraform"
  attributes    = ["state"]
  region        = "us-west-2"
}
