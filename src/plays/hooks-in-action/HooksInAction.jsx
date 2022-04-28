import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';

function HooksInAction(props) {
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
          <div>
            <h1>Play Details -  Hooks in Action</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tincidunt consectetur,
              nisi nunc ultricies nisi, eget consectetur nunc nisi
              euismod nunc.
            </p>
          </div>
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default HooksInAction;