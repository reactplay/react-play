import PlayHeader from 'common/playlists/PlayHeader';
import TextArea from './components/TextArea';
import { TextState } from './context/textStates';
import './styles.css';

// WARNING: Do not change the entry componenet name
function TextAnalyzer(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <TextState>
            <div className="Body">
              <TextArea />
            </div>
          </TextState>

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TextAnalyzer;
