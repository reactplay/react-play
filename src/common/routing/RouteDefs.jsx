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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NhostClient, NhostReactProvider } from "@nhost/react";
import useGetPlays from "common/hooks/useGetPlays";

const nhost = new NhostClient({
  backendUrl: process.env.REACT_APP_NHOST_BACKEND_URL || "",
});

const RouteDefs = () => {
  const [loading, error, plays] = useGetPlays();
  return (
    <NhostReactProvider nhost={nhost}>
      <BrowserRouter>
        <Header />
        <DefMeta />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plays' element={<App />}>
            <Route index element={<PlayList plays={plays} />} />
            {!!plays.length &&
              plays?.map((play, index) => (
                <Route
                  key={index}
                  path={play?.path}
                  element={<PlayMeta key={index} play={play} />}
                >
                  <Route path=':param' element={<PlayMeta {...play} />} />
                </Route>
              ))}
          </Route>
          <Route path='/ideas' element={<PlayIdeas />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NhostReactProvider>
  );
};

export default RouteDefs;
