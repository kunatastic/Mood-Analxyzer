import boto3

def lambda_handler(event, context):
    # TODO implement
    s3 = boto3.client("s3");
    bucket = "usent"
    key = "paragraph1-2a2c3e0d-a9e7-4e1c-a408-fa63d22c36d1.txt"
    file = s3.get_object(Bucket = bucket,Key = key)
    paragraph = str(file['Body'].read())
    
    comprehend = boto3.client("comprehend")
    response = comprehend.detect_sentiment(Text = paragraph,LanguageCode = "en")
    print(response)
        
    
    return response