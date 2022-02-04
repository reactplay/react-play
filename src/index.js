import App from "App";
import {
  Footer,
  Header, Home, PageNotFound
} from "common";
import { SearchContext } from 'common/search/search-context';
import "index.css";
import { getAllPlays } from 'meta/play-meta';
import Playground from 'Playground';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "reportWebVitals";

const Index = () => {
  const plays = getAllPlays();
  const [searchTerm, setSearchTerm] = useState("");
  const value = { searchTerm, setSearchTerm };
  return (
    <React.StrictMode>
      <SearchContext.Provider value={value}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plays" element={<App />} />
          <Route path="/plays/play" element={<Playground />}>
            <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a Play</p>
                </main>
              }
            />
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
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      </SearchContext.Provider>
      <Footer />
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
