import React, { useCallback, useContext } from 'react';
import '../styles/styles.css';
import '../styles/Button.css';
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
        <button className="Actions-button" onClick={() => getSentiments(value)}>
          {' '}
          Sentiment{' '}
        </button>
      </div>
      <div>
        <button className="Actions-button" onClick={() => getEntities(value)}>
          Entities
        </button>
      </div>
      <div>
        <button className="Actions-button" onClick={() => paraphraser(value)}>
          Paraphraser
        </button>
      </div>
      <div>
        <form action="" className="drop-form" onSubmit={Convert}>
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
            <button className="Actions-button" type="sumbit">
              Convert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Actions;
