import PlayHeader from "common/playlists/PlayHeader";
import "./styles.css";
import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import Button from './Button'
// WARNING: Do not change the entry componenet name
function CodeEditor(props) {
  // Your Code Start below.
  const [openedEditor, setOpenedEditor] = useState("html");
  const [activeButton, setActiveButton] = useState("html");

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState(``);

  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
    setActiveButton(editorName);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      );
    }, 250);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);
  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body ">
          {/* Your Code Starts Here */}
          <div className="code-editor-tab-button-container">
            <Button
              backgroundColor={activeButton === "html" ? "blue" : ""}
              title="HTML"
              onClick={() => {
                onTabClick("html");
              }}
            />
            <Button
              backgroundColor={activeButton === "css" ? "blue" : ""}
              title="CSS"
              onClick={() => {
                onTabClick("css");
              }}
            />
            <Button
              backgroundColor={activeButton === "js" ? "blue" : ""}
              title="JavaScript"
              onClick={() => {
                onTabClick("js");
              }}
            />
          </div>
          <div className="code-editor-container">
            {openedEditor === "html" ? (
              <Editor
                language="xml"
                displayName="HTML"
                value={html}
                setEditorState={setHtml}
              />
            ) : openedEditor === "css" ? (
              <Editor
                language="css"
                displayName="CSS"
                value={css}
                setEditorState={setCss}
              />
            ) : (
              <Editor
                language="javascript"
                displayName="JS"
                value={js}
                setEditorState={setJs}
              />
            )}
          </div> 
          <div className="code-editor-bottom-pane">
            <iframe
              id="my_iframe"
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="1"
              width="100%"
              height="100%"
            />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
