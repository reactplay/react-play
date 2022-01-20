import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Footer, Header } from './common';
import "./index.css";
import {
  CountDownTimer,
  CurrentTimer,
  Home,
  MovieContainer
} from './plays';
import reportWebVitals from "./reportWebVitals";


ReactDOM.render(
  <React.StrictMode>
    <Header /> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MovieContainer />} />
          <Route path="clock" element={<CurrentTimer />} />
          <Route path="countdown" element={<CountDownTimer targetDate = {'Jan 25, 2022 15:37:25'} />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
