import App from "App";
import { Footer, Header, Home, PlayMeta, DefMeta, PageNotFound } from "common";
import PlayList from "common/playlists/PlayList";
import QuizeoHome from "plays/quizeo/src/pages/homePage/homePage.component";
import MoviePage from "plays/quizeo/src/pages/moviePage/moviePage.component";
import { getAllPlays } from "meta/play-meta-util";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { store, persistor } from "plays/quizeo/src/redux/store";
import { PersistGate } from 'redux-persist/integration/react';

const RouteDefs = () => {
  const plays = getAllPlays();

  return (
    <BrowserRouter>
      <Header />
      <DefMeta />
      <Provider store = {store}>
          <PersistGate persistor={persistor}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plays" element={<App />}>
        <Route exact path="/plays/quizeo" element={<QuizeoHome/>}/> 
        <Route exact path="/plays/quizeo/movie/:categoryId" element={<MoviePage/>}></Route>
          <Route index element={<PlayList />} />
          {plays.map((play, index) => (
            <Route
              key={index}
              path={play.path}
              element={<PlayMeta {...play} />} // Put play data inside PlayMeta tag for dynamic meta tags
            />
          ))}
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      </PersistGate>
      </Provider>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteDefs;
