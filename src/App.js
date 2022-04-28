import { Outlet } from "react-router-dom";
import ReactGA from 'react-ga';

import "App.css";

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);

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
