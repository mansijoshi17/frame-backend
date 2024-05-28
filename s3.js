const AWS = require("aws-sdk");
require("dotenv").config();
const promisify = require("util.promisify");
const crypto = require("crypto");
const randomBytes = promisify(crypto.randomBytes);

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const bucketName = "superfunsocial";

const s3 = new AWS.S3({
  params: { Bucket: bucketName },
  region: "ap-south-1",
});

async function generateUploadURL() {
  const rawBytes = await randomBytes(16);
  const imageName = rawBytes.toString("hex");

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}

module.exports = generateUploadURL;