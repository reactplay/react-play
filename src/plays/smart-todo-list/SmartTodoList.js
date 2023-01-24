import PlayHeader from 'common/playlists/PlayHeader';
import App from './App';
import { AppProvider } from './context/appContext';
import './styles.css';

// WARNING: Do not change the entry componenet name
function SmartTodoList(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <AppProvider>
            <App />
          </AppProvider>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default SmartTodoList;
