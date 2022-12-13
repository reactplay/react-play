import PlayHeader from 'common/playlists/PlayHeader'
import { AppProvider } from './context/appContext'
import App from './App'
import './styles.css'

// WARNING: Do not change the entry componenet name
function SmartTodoApp(props) {
  // Your Code Start below.

  return (
    <>
      <div className='play-details'>
        <PlayHeader play={props} />
        <div className='play-details-body'>
          {/* Your Code Starts Here */}
          <AppProvider>
            <App />
          </AppProvider>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  )
}

export default SmartTodoApp
