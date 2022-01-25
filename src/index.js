import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Footer, Header } from "./common";
import "./index.css";
import { getAllPlays } from './meta/play-meta';
import reportWebVitals from "./reportWebVitals";


const Index = () => {
  const plays = getAllPlays();
  return (
    <React.StrictMode>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {
              plays.map((play, index) => (
                <Route
                  key={index}
                  path={play.path}
                  element={play.component()}
                />
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
