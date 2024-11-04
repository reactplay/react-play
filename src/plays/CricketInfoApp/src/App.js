import "./App.css";

import Typography from "@mui/material/Typography";

import SearchBar from "./SearchBar";
import OdiPlayerList from "./OdiPlayerList";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [isOpen, setisOpen] = useState(true);
  function handleSearch() {
    setisOpen(false);
  }
  return (
    <>
      <div className="upperStyling">
        <Typography variant="h3" color="success">
          Indian Cricket Players
        </Typography>
      </div>
      <div className="searchbar">
        <SearchBar handleSearch={handleSearch} />
      </div>
      <div className="buttonStyle">
        <Button onClick={() => setisOpen(!isOpen)}> Toggle Show Players</Button>
      </div>
      {isOpen && <OdiPlayerList />}
    </>
  );
}

export default App;
