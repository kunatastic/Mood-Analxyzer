# Mood-Analxyzer

#

> ## Main Aim:

Analyses the Mood of the User using **Facial and Textual Sentiments**

### Facial Sentiments

The facial sentiments is being build up on [face-api.js](https://github.com/justadudewhohacks/face-api.js/). This will ask the permission for accessing our Camera. This module will try to find the sentiments on your face, your estimated age and your gender.

### Textual Sentiments

The Textual Sentiments are being build upon AWS services namely AWS Comprehend, AWS S3 and AWS Lambda Function. You need to upload a `.txt ` document to the form and the document is then analyzed by the AWS Comprehend service via the Lambda function and the result (Sentiment Score) can be viewed using the deployed API endpoint.

### Report Analysis

Here your complete Anaylsis of your facial and textual details will be represented and stored.

#

> ## How to use:

1. Clone this repo to your localhost.

2. Enable the CORS policy in your Browser for using and retrieving the data from AWS. You can do easily using the [Extension](https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en) ( This exstension is for chrome only).

3. After enabling the CORS Extension.

4. run the index.html on your localhost.

#

> ## Important:

1. **_The AWS feature is not automated as of now. It is planned for future scope of the project as is mentioned in the research paper submitted._**

2. **_Warning: Dont directly run the index.htm use the LiveServer feature in VScode_**

3. **_Login Module is Disabled just hit signin button_**
