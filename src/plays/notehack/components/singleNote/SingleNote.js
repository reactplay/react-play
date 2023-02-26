import { MdEdit, MdDelete } from 'react-icons/md';
import './SingleNote.css';

const SingleNote = ({ name, id, date, setNote, noteList, setNoteList }) => {
  // Selected note logic
  const handleEdit = () => {
    let selectedNote = noteList.find((currEle) => currEle.id === id);
    setNote(selectedNote);
  };

  // Deleted note logic
  const handleDelete = () => {
    let updatedNoteList = noteList.filter((currEle) => currEle.id !== id);
    setNoteList(updatedNoteList);
  };

  return (
    <>
      <div className="single-note-container">
        <p className="single-note-info">
          <span className="name">{name}</span>
          <span className="date">{date}</span>
        </p>
        <div className="single-note-buttons">
          <MdEdit className="edit" onClick={handleEdit} />
          <MdDelete className="delete" onClick={handleDelete} />
        </div>
      </div>
    </>
  );
};

export default SingleNote;
