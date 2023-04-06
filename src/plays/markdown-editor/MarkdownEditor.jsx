import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import { Remarkable } from 'remarkable';
import Output from './Output';
import './styles.css';
import Downloader from './Downloader';

// defining the default rules
const md = new Remarkable('full', {
  html: true,
  typographer: true
});

// enabling some html tag rules
md.core.ruler.enable(['abbr']);
md.block.ruler.enable(['footnote', 'deflist']);
md.inline.ruler.enable(['footnote_inline', 'ins', 'mark', 'sub', 'sup']);

// WARNING: Do not change the entry component name
function MarkdownEditor(props) {
  // Your Code Start below.

  // state for textarea input value
  const [text, setText] = useState('');

  return (
    <>
      <div className="md-editor play-details">
        <PlayHeader play={props} />

        <div>
          <main className="md-editor main">
            <h1 className="md-editor heading-1">Markdown Editor </h1>
            <h4 className="md-editor heading-4">You can type in html tags as well</h4>
            <article>
              <div className="md-editor flex-container">
                <textarea
                  required
                  cols="40"
                  id="markdown"
                  name="markdown"
                  placeholder="Type Markdown..."
                  rows="10"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />

                <Output md={md} mdPreviewBox="mdPreviewBox" text={text} />
              </div>
              <Downloader fileName="your-markdown" mdPreviewBox="mdPreviewBox" text={text} />
            </article>
          </main>
        </div>
      </div>
    </>
  );
}

export default MarkdownEditor;
