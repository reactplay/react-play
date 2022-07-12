import PlayHeader from 'common/playlists/PlayHeader';
import './NavBar.css'
import NavListItems from './navListItems';

function NavBar(props) {

  // Your Code Start below.
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}

          <NavListItems />

          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}
export default NavBar;
