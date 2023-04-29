import PlayHeader from 'common/playlists/PlayHeader';
import './CustomMemesGenerator.css';
import Header from './Header.jsx';
import Meme from './Meme.jsx';

// WARNING: Do not change the entry componenet name
function CustomMemesGenerator(props) {
  // Your Code Start below.

  return (
    <div className="cmg-body">
      <div className="cmg-main-container">
        <Header />
        <Meme />
      </div>
    </div>
  );
}

export default CustomMemesGenerator;
