import App from "App";
<<<<<<< HEAD
import { Footer, Header, Home, PageNotFound, PlayNotFound} from "common";
import PlayList from 'common/playlists/PlayList';
import { getAllPlays } from 'meta/play-meta-util';
=======
import { Footer, Header, Home, PageNotFound } from "common";
import PlayList from "common/playlists/PlayList";
import { getAllPlays } from "meta/play-meta-util";
>>>>>>> 21363533eeec11e0a8d0814b7490bc91e76f1fef
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { cloneElement } from 'react'

const RouteDefs = () => {
  const plays = getAllPlays();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plays" element={<App />}>
          <Route index element={<PlayList />} />
          {plays.map((play, index) => (
            <Route key={index} path={play.path} element={cloneElement(play.component(), {id: play.id})}/>
          ))}
        </Route>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/play-not-found" element={<PlayNotFound/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteDefs;
