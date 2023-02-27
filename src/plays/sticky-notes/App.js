import { useState } from 'react';
import Note from './components/Note';
import Form from './components/Form';

function App() {
  const [notes, setNotes] = useState([
    {
      body: `Two bytes meet.  The first byte asks, “Are you ill?”
      The second byte replies, “No, just feeling a bit off.”`,
      bg: 'bg-purple-400',
      id: Math.random() * 10
    }
  ]);
  const [note, setNote] = useState({
    body: '',
    bg: ''
  });
  const [editNote, setEditNote] = useState();
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleEditForm, setToggleEditForm] = useState(false);

  const handleChange = (e) => {
    if (toggleEditForm) {
      setEditNote({ ...editNote, [e.target.name]: e.target.value });
    }

    if (toggleForm) {
      setNote({ ...note, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.body) {
      const newNote = {
        ...note,
        id: Math.random() * 10
      };

      setNotes([newNote, ...notes]);
      setNote({
        body: ''
      });
      setToggleForm(!toggleForm);
    }
  };

  const handleDelete = (id) => {
    const leftNotes = notes.filter((note) => note.id !== id);
    setNotes(leftNotes);
  };

  const handleEdit = (id) => {
    const toEdit = notes.filter((note) => note.id === id);
    setEditNote(toEdit[0]);
    setToggleEditForm(!toggleEditForm);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const updatedNotes = notes.map((note) => (note.id === editNote.id ? editNote : note));

    setNotes(updatedNotes);

    setEditNote({});
    setToggleEditForm(!toggleEditForm);
  };

  return (
    <div className="sticky-notes">
      <header className="text-center">
        <h1 className="text-3xl font-bold pt-2 pb-2 text-blue-900">Sticky Notes</h1>
        <button
          className="bg-blue-500 py-2 px-4 text-white rounded"
          onClick={() => setToggleForm(!toggleForm)}
        >
          Add Note
        </button>
      </header>

      {/* add new note form */}
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        note={note.body}
        setToggleForm={setToggleForm}
        toggleForm={toggleForm}
      />

      {/* edit note form */}
      {toggleEditForm && (
        <>
          <Form
            handleChange={handleChange}
            handleSubmit={handleEditSubmit}
            note={editNote.body}
            setToggleForm={setToggleEditForm}
            toggleForm={toggleEditForm}
          />
        </>
      )}

      <div className="notes border-t-2 border-gray-200 mt-5 pt-5 container mx-auto grid md:grid-cols-4 gap-10">
        {notes.length > 0 ? (
          notes.map((singleNote, i) => {
            return (
              <Note handleDelete={handleDelete} handleEdit={handleEdit} key={i} note={singleNote} />
            );
          })
        ) : (
          <p> No notes. Please add one </p>
        )}
      </div>
    </div>
  );
}

export default App;
