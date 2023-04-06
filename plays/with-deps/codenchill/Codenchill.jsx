import PlayHeader from 'common/playlists/PlayHeader';
import { Provider } from 'react-redux';
import store from './app/store';
import Main from './Main';
import './styles.css';

// WARNING: Do not change the entry componenet name
function Codenchill(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="overflow-y-auto grow p-0 color-change-5x">
          <Provider store={store}>
            <Main />
          </Provider>
        </div>
      </div>
    </>
  );
}

export default Codenchill;
