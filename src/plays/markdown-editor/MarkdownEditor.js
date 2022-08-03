import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import { Remarkable } from 'remarkable';
import './styles.css';


const markdown = new Remarkable();

// WARNING: Do not change the entry component name
function MarkdownEditor(props) {

  // Your Code Start below.

   // state for textarea input value
   const [ text, setText ] = useState("");

  return (
    <>
      <div className="md-editor play-details">
        <PlayHeader play={props} />
        
        <div>
          <main className='md-editor main'>
            <h1 className='md-editor heading-1'>Markdown Editor </h1>
            <article>
            <label htmlFor='markdown'><h3 className='md-editor heading-3'>Type Here </h3></label> 
             <textarea cols='30' rows='10' id='markdown' name='markdown' placeholder='Type Something...' required
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            </textarea>
          
        <h3 className='md-editor heading-3'> Preview</h3>

          <div className='md-editor output-div' dangerouslySetInnerHTML={{__html: markdown.render(text)}} >
          </div>
          
        </article>
      </main>
    </div>
        
      </div>
    </>
  );
}

export default MarkdownEditor;