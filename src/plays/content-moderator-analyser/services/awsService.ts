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
  console.log('uploadToS3');
  if (!file) {
    return console.log('Please choose a file to upload!');
  }
  const objectUploadToS3 = {
    Bucket: bucket,
    Key: file.name,
    Body: file
  };
  console.log('objectUploadToS3', objectUploadToS3.Key);
  s3.upload(objectUploadToS3, function (err: any, data: any) {
    if (err) {
      return console.log('Error uploading image: ', err.message);
    }
    console.log('Successfully uploaded image.', file);
  });
};

export function detectImageModerationLabels(paramsModeration: any, name: string) {
  const rekognition = new AWS.Rekognition();
  console.log('Region: ', AWS.config.region);
  console.log('config', config);
  console.log('paramsModeration', paramsModeration);
  console.log('name', name);
  rekognition.detectLabels(paramsModeration, function (err, data) {
    if (err) {
      alert('Error occured during Image Moderation');
      console.log(err, data);

      return;
    }
    console.log('success!', data);
  });
}
