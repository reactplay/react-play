import App from "App";
import { Footer, Header, Home, PlayMeta, DefMeta, PageNotFound, PlayIdeas } from "common";
import PlayList from "common/playlists/PlayList";
import { getAllPlays } from "meta/play-meta-util";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NhostApolloProvider } from '@nhost/react-apollo';
import { NhostClient, NhostReactProvider } from '@nhost/react';

const nhost = new NhostClient({
  backendUrl: process.env.REACT_APP_NHOST_BACKEND_URL || ''
});

const RouteDefs = () => {
  const plays = getAllPlays();

  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
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
      </NhostApolloProvider>
    </NhostReactProvider>
  );
};

export default RouteDefs;