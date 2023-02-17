import React, { useCallback, useContext, useState } from 'react';
import '../styles.css';
import '../Button.css';
import TextContext from '../context/playContext';
import Dropzone from 'react-dropzone';

const Actions = () => {
  const { value, setFiles, files, getEntities, getSentiments, paraphraser, ImageToText } =
    useContext(TextContext);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  }, []);

  console.log(files[0]);

  const Convert = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Session', 'string');
    formData.append('srcImg', files[0]);

    ImageToText(formData);
  };
  return (
    <div className="btn-cont">
      <div>
        <button className="button-58" onClick={() => getSentiments(value)}>
          {' '}
          Sentiment{' '}
        </button>
      </div>
      <div>
        <button className="button-58" onClick={() => getEntities(value)}>
          Entities
        </button>
      </div>
      <div>
        <button className="button-58" onClick={() => paraphraser(value)}>
          Paraphraser
        </button>
      </div>
      <div>
        <form action="" onSubmit={Convert} className="drop-form">
          <div className="drop-zone-cont">
            <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} name="picturePath" />
                  <p style={{ color: 'white', cursor: 'pointer' }}>
                    {files[0] ? files[0].name : 'Add Scanned Image'}
                  </p>
                </div>
              )}
            </Dropzone>
          </div>
          <div>
            <button type="sumbit" className="button-58">
              Convert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Actions;
