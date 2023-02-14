import React, { useCallback, useContext, useState } from 'react';
import '../styles.css';
import '../Button.css';
import { Convert, getEntities, getSentiments, getSpellcheck } from '../requests/ApiRequests';
import TextContext from '../context/playContext';
import Dropzone from 'react-dropzone';

const Actions = () => {
  const { value } = useContext(TextContext);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  }, []);
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
        <button className="button-58" onClick={() => getSpellcheck(value)}>
          Spell check
        </button>
      </div>
      <div>
        <form action="" onSubmit={Convert} className="drop-form">
          <div className="drop-zone-cont">
            <Dropzone acceptedFiles=".jpg,.jpeg,.png" multiple={false} onDrop={onDrop}>
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} name="picturePath" />
                  <p>Add Scanned Images</p>
                </div>
              )}
            </Dropzone>
          </div>
          <div>
            <button type="sumbit" className="button-58">
              Send req
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Actions;
