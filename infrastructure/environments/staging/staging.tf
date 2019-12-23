# REQUEST_LOG: :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
# ::ffff:73.19.106.40 - - [22/Aug/2019:00:28:56 +0000] "GET /client/f34909748169e2717bd5/example$45story~experimental_editor~experimental_sandbox~index~landing~password$45reset~story_$slug~~dc3d0b61.example$45story~experimental_editor~experimental_sandbox~index~landing~password$45reset~story_$slug~~dc3d0b61.js HTTP/1.1" 200 - "http://meine.krwenholz.com:3000/landing" "Mozilla/5.0 (iPad; CPU OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/18.1b15719 Mobile/15E148 Safari/605.1.15""
# %h %^[%d:%^] "%r" %s %b "%R" "%u"
# date format: %d/%b/%Y:%H:%M:%S %z
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
