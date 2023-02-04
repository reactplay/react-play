import React from 'react';

function ImageInput() {
  return (
    <>
      <h1>Image Input</h1>
      <label htmlFor="image-input">Image</label>
      <input accept="image/*" type="file" />
    </>
  );
}

export default ImageInput;
