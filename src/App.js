import { Outlet } from "react-router-dom";
import ReactGA from 'react-ga';

import "App.css";

const TRACKING_ID = "UA-XXXXX-X"; // TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  if (!window.location.href.includes("localhost")) {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return (
    <div className="app-body">
      <Outlet />
    </div>
  );
}

export default App;
