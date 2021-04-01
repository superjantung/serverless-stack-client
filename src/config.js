const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-superjantung",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://sbbwbhwkv3.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_XHPf3qU3o",
    APP_CLIENT_ID: "u3mava30otv3ibpslh56vflbp",
    IDENTITY_POOL_ID: "us-east-1:f1777967-64a0-4269-8fc7-216a2f8dec45",
  },
  MAX_ATTACHMENT_SIZE: 5000000
};


export default config;