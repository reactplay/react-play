import { getPlayById } from 'meta/play-meta-util';
import PlayHeader from 'common/playlists/PlayHeader';
import { store,persistor } from './redux/store';
import { useEffect } from 'react';
import { setScore, setQuestionNo } from "./redux/questions/questions-action";
import Directory from "./components/directory/directory.component";
import Header from "./components/header/header.component";
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './quizeo.css'

function Quizeo(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id); 

  // Your Code Start below.
  useEffect(() =>{
    store.dispatch(setScore());
    store.dispatch(setQuestionNo());
  })
  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body quizeo">
        {/* Your Code Starts Here */}
        <Provider store = {store}>
          <PersistGate persistor={persistor}>
            <Header/>
            <Directory/>
            </PersistGate>
        </Provider>
        {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Quizeo;