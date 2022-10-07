import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Footer from "./components/Footer";

function Textutils(props) {
  // Your Code Start below.
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              {/* /users --> Component 1
          /users/home --> Component 2
          Always use "exact" keyword to match the exact path */}
              <Route
                exact
                path="/"
                element={
                  <TextForm
                    showAlert={showAlert}
                    heading="Enter The Text To Analyze Below"
                    mode={mode}
                  />
                }
              />
              <Route exact path="/about" element={<About mode={mode} />} />
            </Routes>

            {/* <About /> */}
          </div>
          <Footer />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Textutils;
