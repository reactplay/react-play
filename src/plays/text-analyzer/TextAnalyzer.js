import PlayHeader from 'common/playlists/PlayHeader';
import { useContext } from 'react';
import Actions from './components/Actions';
import Result from './components/Result';
import TextArea from './components/TextArea';
import TextContext from './context/playContext';
import { TextState } from './context/textStates';
import './styles.css';

// WARNING: Do not change the entry componenet name
function TextAnalyzer(props) {
  // Your Code Start below.
  // const { result, TextfromImage } = useContext(TextContext);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <TextState>
            <div className="Play-container">
              <div className="Text-cont">
                <TextArea />
                <Result />
              </div>
              <div className="Actions-cont">
                <Actions />
              </div>
            </div>
          </TextState>

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default TextAnalyzer;
