import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';
import VideoViewer from './VideoViewer';

function YoutubeClone(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
             <VideoViewer />
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default YoutubeClone;