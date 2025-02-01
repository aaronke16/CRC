# 🏆 AWS Cloud Resume Challenge - [aaronke.com](https://aaronke.com)

![Cloud Resume Challenge Architecture](assets/CRC_flowsheer.jpg)

## 📌 Overview
This project is my implementation of the **AWS Cloud Resume Challenge**, demonstrating a **full-stack serverless application** hosted on AWS. It showcases my ability to work with **cloud technologies, CI/CD automation, and infrastructure as code**.

The website is live at **[aaronke.com](https://aaronke.com)**.

---

## 🛠️ Technologies Used

### **Frontend (Static Website)**
- 🗂 **S3** – Hosts the static files (HTML, CSS, JavaScript).
- 🚀 **CloudFront** – Serves the website via a global CDN for performance and security.
- 🌍 **Route 53** – Manages the custom domain (**aaronke.com**).
- 🔒 **AWS Certificate Manager (ACM)** – Provides SSL/TLS certificates for HTTPS encryption.

### **Backend (Serverless API)**
- 🌐 **API Gateway** – Acts as a REST API endpoint to invoke the Lambda function.
- 🏗 **Lambda** – Serverless function that updates and retrieves visitor count from DynamoDB.
- 💾 **DynamoDB** – NoSQL database used to store and track website visits.

### **CI/CD & Infrastructure as Code**
- 🤖 **GitHub Actions** – Automates deployment by pushing website updates to S3 and invalidating the CloudFront cache.
- ⚙️ **Terraform** – Defines and provisions the cloud infrastructure as code.

---

## 📌 How It Works

### 1️⃣ **Frontend Flow**
1. **End User** visits **[aaronke.com](https://aaronke.com)**.
2. A **DNS Request** is sent via **Route 53**, which resolves to a CloudFront distribution.
3. **CloudFront** caches and serves the static content stored in an **S3 bucket**.
4. The website loads, and a JavaScript function calls the API to update and display visitor count.

### 2️⃣ **Backend Flow**
1. The website triggers an **API Gateway** request.
2. **API Gateway** invokes an **AWS Lambda** function.
3. The Lambda function:
   - Retrieves the visitor count from **DynamoDB**.
   - Increments the count and updates it in **DynamoDB**.
4. The updated count is returned and displayed on the website.

### 3️⃣ **CI/CD Deployment**
- **Frontend Updates**: Any push to the GitHub repository triggers **GitHub Actions**, which:
  - Uploads files to **S3**.
  - Invalidates the **CloudFront** cache to reflect changes.
- **Backend Updates**: Terraform is used to provision and manage AWS resources.
