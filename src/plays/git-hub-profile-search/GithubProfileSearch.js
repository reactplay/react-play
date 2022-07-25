import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import Input from './components/Input';
import Results from './components/Results';
import { ResultContextProvider } from './context/ResultContextProvider';

// WARNING: Do not change the entry componenet name
function GithubProfileSearch(props) {

  // Your Code Start below.

  return (
    <>
      <div className="play-details nirban-github-profile">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className='play-body nirban-github-profile-body'>
            <ResultContextProvider>
              <h1 className='play-heading nirban-github-profile-heading'>
                Github Profile Search
              </h1>
              <Input />
              <div className='nirban-github-profile-result'>
                <Results />
              </div>
            </ResultContextProvider>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default GithubProfileSearch;