import PlayHeader from 'common/playlists/PlayHeader';
import './Custommemesgenerator.css';
import Header from './Header.jsx';
import Meme from './Meme.jsx';

// WARNING: Do not change the entry componenet name
function Custommemesgenerator(props) {
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

export default Custommemesgenerator;
