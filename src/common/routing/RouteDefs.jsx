import App from "App";
import {
  Footer,
  Header,
  Home,
  PlayMeta,
  DefMeta,
  PageNotFound,
  PlayIdeas,
} from "common";
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
          {plays.map((play, route_index) => (
            <Route
              key={route_index}
              path={play.path}
              element={<PlayMeta {...play} />} // Put play data inside PlayMeta tag for dynamic meta tags
            >
              {/* For additonal paramters for routing. One can use optional route instead of child route */}
              <Route path=":param" element={<PlayMeta {...play} />} />
            </Route>
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
