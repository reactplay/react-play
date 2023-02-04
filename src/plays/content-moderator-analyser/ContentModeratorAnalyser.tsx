import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import ImageInput from './components/ImageInput/ImageInput';
import '@fontsource/roboto/300.css';

function ContentModeratorAnalyser(props: any) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <ImageInput />
        </div>
      </div>
    </>
  );
}

export default ContentModeratorAnalyser;
