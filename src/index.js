import RouteDefs from "common/routing/RouteDefs";
import { SearchContext } from "common/search/search-context";
import "index.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "reportWebVitals";
// import * as registerServiceWorker from "./registerServiceWorker";

/** removing console statement in react prod build */
if (process.env.NODE_ENV !== "development") {
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
  console.disableYellowBox = true;
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showShareModal, setShowShareModal] = useState(false);
  const [filterQuery, setFilterQuery] = useState({
    level_id: "",
    tags: [],
    owner_user_id: "",
    language: "",
  });

  const value = {
    searchTerm,
    setSearchTerm,
    filterQuery,
    setFilterQuery,
    showShareModal,
    setShowShareModal,
  };
  return (
    <React.StrictMode>
      <SearchContext.Provider value={value}>
        <RouteDefs />
      </SearchContext.Provider>
    </React.StrictMode>
  );
};
const container = document.getElementById("root");
createRoot(container).render(<Index />);

// Makes the app to work offline and load faster
// registerServiceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
