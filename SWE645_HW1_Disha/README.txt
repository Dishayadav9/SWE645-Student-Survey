SWE 645 - Assignment 1
Student: Disha Yadav

PROJECT CONTENTS
----------------
index.html      - Class homepage with student image, introduction, Bootstrap styling, and survey link.
survey.html     - Student Survey form containing all fields requested in Assignment 1.
style.css       - Shared custom styling.
script.js       - Client-side Raffle validation and form feedback.
error.html      - Optional custom error page.
images/         - Contains the homepage profile image.

DEPLOYED URLS
-------------
S3 Homepage URL: http://disha-swe645-hw1-2026.s3-website-us-east-1.amazonaws.com
EC2 Homepage URL: http://34.226.122.247

LOCAL TEST
----------
1. Extract the project folder.
2. Open index.html in a web browser.
3. Confirm the profile image appears.
4. Click "Take the Student Survey" and verify survey.html opens.
5. Test required fields and the Raffle field. The Raffle must contain at least 10 comma-separated whole numbers from 1 through 100.
6. Test Submit and Cancel.

AMAZON S3 STATIC WEBSITE DEPLOYMENT
-----------------------------------
1. Sign in to the AWS Management Console and open Amazon S3.
2. Create a new general-purpose S3 bucket with a globally unique bucket name.
3. Upload the CONTENTS of this project folder while preserving the images/ folder structure.
4. Open the bucket's Properties tab.
5. Under Static website hosting, choose Edit and enable website hosting.
6. Set Index document to: index.html
7. Set Error document to: error.html
8. For this class static-site exercise, configure public read access as required by the S3 website-hosting tutorial. This normally includes adjusting Block Public Access settings and adding an appropriate bucket policy for s3:GetObject. Only expose this assignment bucket's website objects.
9. Return to Properties > Static website hosting and copy the Bucket website endpoint.
10. Open the endpoint in a browser and test index.html, the image, and survey.html.
11. Paste the working endpoint into the S3 Homepage URL line above.

Example public-read bucket policy (replace BUCKET-NAME):
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::BUCKET-NAME/*"
    }
  ]
}

AMAZON EC2 DEPLOYMENT - AMAZON LINUX 2023 + APACHE
--------------------------------------------------
1. Open the EC2 console and launch an Amazon Linux 2023 instance.
2. Select an instance type allowed by your class/AWS account and create or select a key pair if SSH access is needed.
3. In the security group, allow HTTP TCP port 80 from the internet. Limit SSH port 22 to your own IP when SSH is required.
4. Launch the instance and connect to it using EC2 Instance Connect or SSH.
5. Update packages and install Apache:

   sudo dnf upgrade -y
   sudo dnf install -y httpd

6. Start Apache and enable it at boot:

   sudo systemctl start httpd
   sudo systemctl enable httpd

7. Copy index.html, survey.html, style.css, script.js, error.html, and the images folder to Apache's document root:

   /var/www/html

   One simple method is to upload/copy the files to your home directory first, then run commands such as:

   sudo cp index.html /var/www/html/
   sudo cp survey.html /var/www/html/
   sudo cp style.css /var/www/html/
   sudo cp script.js /var/www/html/
   sudo cp error.html /var/www/html/
   sudo cp -r images /var/www/html/

8. In the EC2 console, copy the instance's Public IPv4 DNS or Public IPv4 address.
9. Open http://YOUR-PUBLIC-DNS/ or http://YOUR-PUBLIC-IP/ in a browser.
10. Verify the homepage, profile image, Student Survey link, form behavior, and styling.
11. Paste the working address into the EC2 Homepage URL line above.

FINAL SUBMISSION CHECKLIST
--------------------------
[X] index.html contains an image and paragraph.
[X] Homepage uses Bootstrap/custom CSS.
[X] Homepage links to survey.html.
[X] Survey has required first name, last name, street, city, state, ZIP, telephone, email, and survey date fields.
[X] Survey has Students, Location, Campus, Atmosphere, Dorm Rooms, and Sports checkboxes.
[X] Survey has Friends, Television, Internet, and Other radio buttons.
[X] Recommendation dropdown has Very Likely, Likely, and Unlikely.
[X] Raffle accepts at least 10 comma-separated numbers from 1 through 100.
[X] Additional Comments textarea is present.
[X] Submit and Cancel buttons are present.
[X] S3 website URL works.
[X] EC2 website URL works.
[X] Both URLs are pasted into this README.
[X] All source files and README are included in the final ZIP.
[X] Test the submitted URLs before uploading to Canvas.
