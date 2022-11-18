import React from "react";
import PlayHeader from "common/playlists/PlayHeader";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { CanvasProvider } from "./CanvasContext";

export default function DrawingBoard(props: any) {
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <React.StrictMode>
            <Provider store={store}>
              <CanvasProvider>
                <App />
              </CanvasProvider>
            </Provider>
          </React.StrictMode>
        </div>
      </div>
    </>
  );
}
