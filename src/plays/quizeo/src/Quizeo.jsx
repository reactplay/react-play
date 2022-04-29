import { getPlayById } from 'meta/play-meta-util';

import Header from './components/header/header.component';
import Home from './pages/homePage/homePage.component';
import MoviePage from './pages/moviePage/moviePage.component';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';

import './quizeo.css'
import './App.css';



import PlayHeader from 'common/playlists/PlayHeader';

function Quizeo(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
        {/* Your Code Starts Here */}
        <Provider store = {store}>
            <PersistGate persistor={persistor}>
              <div className="App">
                <Header/>
                <Routes>
                  <Route exact path="/" element={<Home/>}/> 
                  <Route exact path="/plays/quizeo/movie/:categoryId" element={<MoviePage/>}></Route>
                </Routes>
              </div>
              </PersistGate>
          </Provider>
        {/* Your Code Ends Here */}
          </div>
      </div>
    </>
  );
}

export default Quizeo;