import './AddNote.css';

const AddNote = ({ note, noteList, setNote, setNoteList }) => {
  // Submit form logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.note.value.trim() === '') {
      /* Does nothing */
    } else {
      // edit note logic
      if (note.id) {
        let newDate = new Date();
        let updatedNoteList = noteList.map((currEle) =>
          currEle.id === note.id
            ? {
                ...note,
                name: note.name,
                date: `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`
              }
            : currEle
        );
        setNoteList(updatedNoteList);
        setNote({});
      } else {
        // add note logic
        let newDate = new Date();
        const newNote = {
          name: e.target.note.value,
          id: crypto.randomUUID(),
          date: `${newDate.toLocaleTimeString()} ${newDate.toLocaleDateString()}`
        };
        setNoteList([...noteList, newNote]);
        setNote({});
      }
    }
  };

  return (
    <>
      <div className="add-note-container">
        <form className="add-note-form" onSubmit={handleSubmit}>
          <input
            className="add-note-input"
            name="note"
            placeholder="Add note"
            type="text"
            value={note.name || ''}
            onChange={(e) => setNote({ ...note, name: e.target.value })}
          />
          <button className="add-note-button" type="submit">
            {note.id ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
