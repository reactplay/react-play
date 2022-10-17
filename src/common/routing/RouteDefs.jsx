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
  TechStack,
} from "common";
import PlayList from "common/playlists/PlayList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NhostClient, NhostReactProvider } from "@nhost/react";

const nhost = new NhostClient({
  backendUrl: process.env.REACT_APP_NHOST_BACKEND_URL || "",
});

const RouteDefs = () => {
  // Array of paths and it's corresponding title. This array is used for changing the title of the website dynamically.
  const routes = [
    {
      path: "/",
      title:
        "ReactPlay - One app to learn, create, and share ReactJS projects.",
    },
    { path: "/plays", title: "ReactPlay - Plays" },
    { path: "/ideas", title: "ReactPlay - Ideas" },
    { path: "/tech-stacks", title: "ReactPlay - Tech Stacks" },
    { path: "/plays/create", title: "ReactPlay - Create Play" },
  ];

  return (
    <NhostReactProvider nhost={nhost}>
      <BrowserRouter>
        <Header />
        <DefMeta routes={routes} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech-stacks" element={<TechStack />} />
          <Route path="/plays" element={<App />}>
            <Route index element={<PlayList />} />
            <Route exact path="create" element={<CreatePlay />} />
            {process.env.NODE_ENV === "development" && (
              <Route exact path="created/:playid" element={<PlayCreated />} />
            )}
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
