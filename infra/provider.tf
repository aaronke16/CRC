terraform {
    required_providers {
        aws = {
            version = ">= 4.9.0"
            source = "hashicorp/aws"
        }
    }
}

provider "aws" {
    profile = "default"  # AWS CLI profile
    region  = "us-east-1"  # AWS region
}
