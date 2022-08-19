import PlayHeader from 'common/playlists/PlayHeader';
import './Keeper.css';
import Header from './Header';
import CreateArea from './CreateArea';
import Note from './Notes';
import useLocalStorage from 'common/hooks/useLocalStorage';

function Keeper(props) {
  //code starts here
  const [notes, setNotes] = useLocalStorage('keeper/notes', [
    {
      id: 0,
      title: 'Write Your Title',
      content: 'And, content here. :)',
    },
  ]); //notes array
  //adding notes
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  //deleting notes
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className='play-details'>
        <PlayHeader play={props} />
        <div className='play-details-body'>
          {/* Your Code Starts Here */}
          <Header />
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>
      {/* Your Code Ends Here */}
    </>
  );
}
export default Keeper;
