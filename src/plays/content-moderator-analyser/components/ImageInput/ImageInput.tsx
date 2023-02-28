/* eslint-disable no-console */
import React, { useState } from 'react';
import { Stack } from '@mui/system';
import { Alert, Button, Chip } from '@mui/material';
import './ImageInput.css';
import {
  bucket,
  detectImageModerationLabels,
  uploadToS3
} from 'plays/content-moderator-analyser/services/awsService';

export function getBinary(encodedFile: any) {
  const base64Image = encodedFile.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
  const binaryImg = atob(base64Image);
  const length = binaryImg.length;
  const ab = new ArrayBuffer(length);
  const ua = new Uint8Array(ab);
  for (let i = 0; i < length; i++) {
    ua[i] = binaryImg.charCodeAt(i);
  }

  return ab;
}

function ImageInput() {
  const [name, setName] = useState('');
  const [binary, setBinary] = useState({});
  const [moderationData, setModerationData] = useState(null);
  const [ImageUploaded, setImageuploaded] = useState(false);

  console.log('moderationData inside processImage', moderationData);

  async function processImage() {
    console.log('processImage');
    const data = await detectImageModerationLabels(binary, name);
    console.log('data inside processImage', data);
    console.log(typeof data);
    setModerationData(data);
  }

  const convertBinary = (e: any) => {
    console.log(e);
    if (e.target.files?.[0]) {
      console.log(e.target.files[0]?.name);
    }
    setName(e.target.files[0]?.name);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const paramsModeration = {
        Image: {
          S3Object: {
            Bucket: bucket,
            Name: file.name
          }
        }
      };
      console.log('paramsModeration', paramsModeration);
      setBinary(paramsModeration);
      uploadToS3(file);
      setImageuploaded(true);
    };
  };

  return (
    <div className="container">
      <Stack alignItems="center" direction="row" spacing={2}>
        <Button component="label" variant="contained">
          Upload
          <input hidden multiple accept="image/*" type="file" onChange={(e) => convertBinary(e)} />
        </Button>
        <Button variant="contained" onClick={processImage}>
          Process Image
        </Button>
      </Stack>
      <div className="alertContainer">
        {ImageUploaded && <Alert severity="success">Image uploaded successfully</Alert>}
      </div>

      {moderationData && (
        <div className="modData">
          {moderationData.Labels.map((label: any) => (
            <Chip color="info" key={label.Name} label={label.Name} variant="filled" />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageInput;
