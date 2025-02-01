# CRC

## CRC Flowchart

![CRC Flowchart](images/CRC_flowsheer.jpg)

AWS Cloud Resume Challenge - aaronke.com 🚀

📌 Overview
This project is my implementation of the AWS Cloud Resume Challenge, which demonstrates a full-stack serverless application hosted on AWS. It showcases my ability to work with cloud technologies, infrastructure as code, CI/CD automation, and serverless backend APIs.

The website is live at aaronke.com.

🛠️ Technologies Used
This project is built using a combination of AWS services and modern cloud development practices.

Frontend (Static Website)
S3 – Hosts the static files (HTML, CSS, JavaScript).
CloudFront – Serves the website via a global CDN for performance and security.
Route 53 – Manages the custom domain (aaronke.com).
AWS Certificate Manager (ACM) – Provides SSL/TLS certificates for HTTPS encryption.
Backend (Serverless API)
API Gateway – Acts as a REST API endpoint to invoke the Lambda function.
Lambda – Serverless function that updates and retrieves visitor count from DynamoDB.
DynamoDB – NoSQL database used to store and track website visits.
CI/CD & Infrastructure as Code
GitHub Actions – Automates deployment by pushing website updates to S3 and invalidating the CloudFront cache.
Terraform – Defines and provisions the cloud infrastructure as code.
📌 How It Works
1️⃣ Frontend Flow
End User visits aaronke.com.
A DNS Request is sent via Route 53, which resolves to a CloudFront distribution.
CloudFront caches and serves the static content stored in an S3 bucket.
The website loads, and a JavaScript function calls the API to update and display visitor count.
2️⃣ Backend Flow
The website triggers an API Gateway request.
API Gateway invokes an AWS Lambda function.
The Lambda function:
Retrieves the visitor count from DynamoDB.
Increments the count and updates it in DynamoDB.
The updated count is returned and displayed on the website.
3️⃣ CI/CD Deployment
Frontend Updates: Any push to the GitHub repository triggers GitHub Actions, which:
Uploads files to S3.
Invalidates the CloudFront cache to reflect changes.
Backend Updates: Terraform is used to provision and manage AWS resources.
