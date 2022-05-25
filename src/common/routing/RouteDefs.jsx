import App from "App";
import { Footer, Header, Home, PlayMeta, DefMeta, PageNotFound, PlayIdeas } from "common";
import PlayList from "common/playlists/PlayList";
import { getAllPlays } from "meta/play-meta-util";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const RouteDefs = () => {
  const plays = getAllPlays();

  return (
    <BrowserRouter>
      <Header />
      <DefMeta />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plays" element={<App />}>
          <Route index element={<PlayList />} />
          {plays.map((play, index) => (
            <Route
              key={index}
              path={play.path}
              element={<PlayMeta {...play} />} // Put play data inside PlayMeta tag for dynamic meta tags
            />
          ))}
        </Route>
        <Route path="/ideas" element={<PlayIdeas />} />
        <Route path="/*" element={<PageNotFound />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteDefs;