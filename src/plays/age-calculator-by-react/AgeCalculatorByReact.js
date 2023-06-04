import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import Calculator from './Calculator';

// WARNING: Do not change the entry componenet name
function AgeCalculatorByReact(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div>
            <Calculator />
          </div>
        </div>
      </div>
    </>
  );
}

export default AgeCalculatorByReact;
