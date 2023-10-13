import PlayHeader from 'common/playlists/PlayHeader';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import AddNote from './components/addNote/AddNote';
import NoteList from './components/noteList/NoteList';
import './styles.css';

// WARNING: Do not change the entry componenet name
function Notehack(props) {
  const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem('noteList')) || []);
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'gradient-one');
  const [note, setNote] = useState({});
  // save notes to local storage logic
  useEffect(() => localStorage.setItem('noteList', JSON.stringify(noteList)), [noteList]);
  // save theme to local storage logic
  useEffect(() => localStorage.setItem('theme', JSON.stringify(theme)), [theme]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body notehack-play">
          <div className={`notehack-container-wrapper ${theme}`}>
            <div className="notehack-container">
              <Header setTheme={setTheme} theme={theme} />
              <AddNote
                note={note}
                noteList={noteList}
                setNote={setNote}
                setNoteList={setNoteList}
              />
              <NoteList
                note={note}
                noteList={noteList}
                setNote={setNote}
                setNoteList={setNoteList}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notehack;
