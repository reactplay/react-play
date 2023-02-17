import PlayHeader from 'common/playlists/PlayHeader';
import InputCard from './components/InputCard';
import ProfileCard from './components/ProfileCard';
import { ResultContextProvider } from './context/ResultContext';
import './styles.css';

// WARNING: Do not change the entry componenet name
function GithubUserFinder(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <ResultContextProvider>
            <div className="flex justify-center flex-col p-8 m-8 App guf">
              <InputCard />
              <ProfileCard />
            </div>
          </ResultContextProvider>

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default GithubUserFinder;
