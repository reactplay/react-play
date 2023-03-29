import PlayHeader from 'common/playlists/PlayHeader';
import App from './src/components/App';
import 'font-awesome/css/font-awesome.min.css';
import './styles.css';

// WARNING: Do not change the entry componenet name
function GithubFinder(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body" id="github-finder">
          <App />
        </div>
      </div>
    </>
  );
}

export default GithubFinder;
