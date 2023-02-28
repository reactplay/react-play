/* eslint-disable no-console */
import AWS from 'aws-sdk';

export const bucket = 'reactplaychallenge';

const config = new AWS.Config({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
  region: 'ap-south-1'
});

AWS.config.update(config);

export const getS3Instance = () => {
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'reactplaychallenge' }
  });

  return s3;
};

export const uploadToS3 = (file: any) => {
  const s3 = getS3Instance();
  if (!file) {
    return console.log('Please choose a file to upload!');
  }
  const objectUploadToS3 = {
    Bucket: bucket,
    Key: file.name,
    Body: file
  };
  s3.upload(objectUploadToS3, function (err: any, data: any) {
    if (err) {
      throw new Error('Error uploading image: ' + err.message);
    }
  });
};

export function detectImageModerationLabels(paramsModeration: any, name: string): Promise<any> {
  const rekognition = new AWS.Rekognition();

  return new Promise((resolve, reject) => {
    rekognition.detectLabels(paramsModeration, function (err, data) {
      if (err) {
        alert('Error occured during Image Moderation');
        reject(err);
      }
      resolve(data);
    });
  });
}
