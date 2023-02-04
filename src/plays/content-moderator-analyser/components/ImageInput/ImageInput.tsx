/* eslint-disable no-console */
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './ImageInput.css';

function processImage() {
  console.log('processImage');
}

function getBinary(encodedFile: any) {
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
  const [binary, setBinary] = React.useState({});

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
          Bytes: getBinary(reader.result)
        }
      };
      console.log('paramsModeration', paramsModeration);
      setBinary(paramsModeration);
    };
  };

  return (
    <div className="imageInput">
      <input
        accept=""
        id="photoupload"
        name="Upload Image"
        placeholder="Upload Image here!"
        type="file"
        onChange={(e) => convertBinary(e)}
      />
      <Button variant="contained" onClick={processImage}>
        Process Image
      </Button>
    </div>
  );
}

export default ImageInput;
