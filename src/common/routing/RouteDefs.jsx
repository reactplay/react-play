import App from "App";
import { useState } from "react";
import {
  Footer,
  Header,
  Home,
  PlayMeta,
  DefMeta,
  PlayIdeas,
  CreatePlay,
  PlayCreated,
  TechStack,
} from "common";
import PlayList from "common/playlists/PlayList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NhostClient, NhostReactProvider } from "@nhost/react";

const nhost = new NhostClient({
  backendUrl: process.env.REACT_APP_NHOST_BACKEND_URL || "",
});

const RouteDefs = () => {

   // state for light mode or dark mode functionality
   const [theme, setTheme] = useState("light");

   // function for toggling betweern light and dark mode
   const toggleTheme = () => {
     setTheme((curr) => ( curr === "light" ? "dark" : "light"));
   }

  return (
    <NhostReactProvider nhost={nhost}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <DefMeta />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/tech-stacks" element={<TechStack />} />
          <Route path="/plays" element={<App />}>
            <Route index element={<PlayList theme={theme}/>} />
            <Route exact path="create" element= {<CreatePlay />}/>
            {process.env.NODE_ENV === "development" && <Route exact path="created/:playid" element={<PlayCreated />} />}
            <Route idex exact path=":username" element={<PlayMeta />}>
              <Route exact path=":playname" element={<PlayMeta />}>
                <Route exact path=":param1" element={<PlayMeta />}>
                  <Route exact path=":param2" element={<PlayMeta />} />
                </Route>
              </Route>
            </Route>

            {/* <Route exact path=":playid" element= {<PlayMeta />}>
                    <Route exact path=":param1" element= {<PlayMeta />}>
                      <Route exact path=":param2" element= {<PlayMeta />}/>
                      </Route>
                  </Route> */}
          </Route>
          <Route path="/play" element={<App />}>
            <Route index element={<PlayList />} />
          </Route>
          <Route path="/ideas" element={<PlayIdeas />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </NhostReactProvider>
  );
};

export default RouteDefs;