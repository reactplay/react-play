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
import { connect } from "react-redux";
import PlayList from "common/playlists/PlayList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostClient, NhostReactProvider } from "@nhost/react";
import useGetPlays from "common/hooks/useGetPlays";
import { useEffect } from "react";
import { GET_ALL_PLAYS } from "../../actions/type";

const nhost = new NhostClient({
  backendUrl: process.env.REACT_APP_NHOST_BACKEND_URL || "",
});

const ChildRoutes = (props) => {
  const { dispatch, plays } = props;
  const [_, error, data] = useGetPlays();

  useEffect(() => {
    dispatch({ type: GET_ALL_PLAYS, payload: data?.plays, error });
  }, [data]);

  return (
    <BrowserRouter>
      <Header />
      <DefMeta />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/plays' element={<App />}>
          <Route index element={<PlayList />} />
          {!!plays.length &&
            plays?.map((play, index) => (
              <Route
                key={index}
                path={play?.path}
                element={<PlayMeta key={index} {...play} />}
                // Put play data inside PlayMeta tag for dynamic meta tags
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
  );
};

const RouteDefs = (props) => {
  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost}>
        <ChildRoutes {...props} />
      </NhostApolloProvider>
    </NhostReactProvider>
  );
};

const mapStateToProps = (state) => {
  const plays = state?.PlayReducer;
  return { plays };
};

export default connect(mapStateToProps)(RouteDefs);
