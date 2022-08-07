import PlayHeader from "common/playlists/PlayHeader";
import "./styles.css";
import React, { useState, useEffect } from 'react';
import Editor from './Editor'
// import useLocalStorage from './useLocalstorage'
// WARNING: Do not change the entry componenet name
function CodeEditor(props) {
  // Your Code Start below.
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `)
    },250)

    return () => clearTimeout(timeout)
  }, [html, css, js])
  return (
  <>
    <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="pane top-pane">
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
            />
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
            />
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              onChange={setJs}
            />
          </div>
          <div className="pane">
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </div>
          {/* <div>
            <h1>Play Details -  Code Editor </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, urna eu tincidunt consectetur,
              nisi nunc ultricies nisi, eget consectetur nunc nisi
              euismod nunc.
            </p>
          </div> */}
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
