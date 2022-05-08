import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ReactGA from 'react-ga';

import "App.css";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

function App() {

  let location = useLocation();

  useEffect(() =>{
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <div className="app-body">
      <Outlet />
    </div>
  );
}

export default App;
