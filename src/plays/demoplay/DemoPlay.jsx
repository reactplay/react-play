import PlayHeader from 'common/playlists/PlayHeader';
import './demoPlay.css';

function DemoPlay(props) {

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
          <div>
            <h1>Play Details -  DemoPlay</h1>
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

export default DemoPlay;