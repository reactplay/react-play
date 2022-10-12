import React, { useState } from "react";
import { FaPlusCircle } from 'react-icons/fa';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const title_len = note.title.trim().length;
  const content_len = note.content.trim().length;
  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="create-note">
        {(
          <input
            className="create-input"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )
        }
        <textarea
          className="create-text"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        />
        <button disabled={title_len === 0 && content_len === 0} className={(title_len === 0 && content_len === 0) ? 'create-button-disabled' : 'create-button'} onClick={submitNote}>< FaPlusCircle /></button>
      </form>
    </div>
  );
}
export default CreateArea;
