import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import { Remarkable } from 'remarkable';
import './styles.css';


const md = new Remarkable();

// WARNING: Do not change the entry component name
function MarkdownEditor(props) {

  // Your Code Start below.

   // state for textarea input value
   const [ text, setText ] = useState("");

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        
        <div>
          <main className='wrapper-div'>
            <h1 className='heading-1'>Markdown Editor </h1>
            <article>
            <label htmlFor='markdown'><h3 className='heading-3'>Type Here </h3></label> 
             <textarea cols='30' rows='10' id='markdown' name='markdown' placeholder='Type Something...' required
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            </textarea>
          
        <h3 className='heading-3'> Preview</h3>

          <div className='output-div' dangerouslySetInnerHTML={{__html: md.render(text)}} >
          </div>
          
        </article>
      </main>
    </div>
        
      </div>
    </>
  );
}

export default MarkdownEditor;