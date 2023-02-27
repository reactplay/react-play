import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import Header from './Header';
import Body from './Body';
import { Provider } from 'react-redux';
import store from './utils/store';

// WARNING: Do not change the entry componenet name
function Youtube(props) {
  // Your Code Start below.
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Provider store={store}>
            <div className="container">
              <Header />
              <Body />
            </div>
          </Provider>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Youtube;
