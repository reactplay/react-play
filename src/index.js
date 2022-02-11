import RouteDefs from "common/routing/RouteDefs";
import { SearchContext } from "common/search/search-context";
import "index.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "reportWebVitals";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterQuery, setFilterQuery] = useState({
    level: "",
    tags: [],
    creator: ""
  });

  const value = { searchTerm, setSearchTerm, filterQuery, setFilterQuery };
  return (
    <React.StrictMode>
      <SearchContext.Provider value={value}>
        <RouteDefs />
      </SearchContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
