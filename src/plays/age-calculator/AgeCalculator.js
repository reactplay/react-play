import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import Calculator from './Calculator';

// WARNING: Do not change the entry componenet name
function AgeCalculator(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <Calculator />
        </div>
      </div>
    </>
  );
}

export default AgeCalculator;
