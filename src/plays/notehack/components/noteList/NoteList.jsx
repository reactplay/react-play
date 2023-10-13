import SingleNote from '../singleNote/SingleNote';
import './NoteList.css';

const NoteList = ({ note, noteList, setNote, setNoteList }) => {
  // Clear All notes logic
  const handleClear = () => {
    setNoteList([]);
  };

  return (
    <>
      <div className="notelist-container">
        <div className="notelist-header">
          <div>
            <span className="title">Notes</span>
            <span className="count">{noteList.length}</span>
          </div>
          <div className="clear-all">
            <button onClick={handleClear}>Clear All</button>
          </div>
        </div>
        <div className="notelist-section">
          {noteList.map(({ name, id, date }) => (
            <SingleNote
              date={date}
              id={id}
              key={id}
              name={name}
              note={note}
              noteList={noteList}
              setNote={setNote}
              setNoteList={setNoteList}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NoteList;
