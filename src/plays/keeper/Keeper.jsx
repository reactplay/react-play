import { getPlayById } from 'meta/play-meta-util';
import PlayHeader from 'common/playlists/PlayHeader';
import './Keeper.css'
import Header from './Header';
import CreateArea from './CreateArea';
import { useState, useEffect } from 'react';
import Note from './Notes';

//Get the Local Storage
const getLocalItems = () => {
  let lists = localStorage.getItem('list');
  console.log('list');
  if (lists) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}
function Keeper(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);
  //code starts here
  const [notes, setNotes] = useState(getLocalItems); //notes array
  //adding notes
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  //deleting notes
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  //add data to local storage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(notes))
  }, [notes])
  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <Header />
          <CreateArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          })}
        </div>
      </div>
      {/* Your Code Ends Here */}
    </>
  );
}
export default Keeper;