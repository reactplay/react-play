import App from "App";
import {
  Footer,
  Header,
  Home,
  PlayMeta,
  DefMeta,
  PlayIdeas,
  CreatePlay,
  PlayCreated,
  TechStack
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
  const success = !loading && !error && !!plays.length;
  return (
    <NhostReactProvider nhost={nhost}>
      <BrowserRouter>
        <Header />
        <DefMeta />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/tech-stacks" element={<TechStack />} />
          <Route path='/plays' element={<App />}>
            <Route
              index
              element={
                <PlayList/>
              }
            />
                  <Route exact path="create" element= {<CreatePlay />}/>
                  <Route exact path="created/:playid" element= {<PlayCreated />}/>
                  <Route exact path=":playid" element= {<PlayMeta />}>
                    <Route exact path=":param1" element= {<PlayMeta />}>
                      <Route exact path=":param2" element= {<PlayMeta />}/>
                      </Route>
                  </Route>
          </Route>
          <Route path='/ideas' element={<PlayIdeas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NhostReactProvider>
  );
};

export default RouteDefs;
