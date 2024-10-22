import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import { useState, useEffect } from 'react';
import JournalEntryForm from './components/JournalEntryForm';
import EntryList from './components/EntryList';
import EntryDetails from './components/EntryDetails';

// WARNING: Do not change the entry componenet name
function DailyJournal(props) {
  // Your Code Start below.
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(savedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem('entries', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries([...entries, entry]);
  };

  const viewEntry = (entry) => setSelectedEntry(entry);

  const goBack = () => setSelectedEntry(null);

  const onDelete = () => setEntries([]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <div className="min-h-screen flex flex-col">
              <h1 className="text-3xl font-semibold mb-3 text-center ">Daily Journal</h1>
              <p className="mb-6 text-gray-600 text-center">
                Your daily companion that you can share your thoughts and feelings with.{' '}
              </p>
              <div className="flex flex-grow p-4">
                <div className="w-full md:w-2/3 lg:w-2/4 p-4">
                  <JournalEntryForm onSubmit={addEntry} />
                </div>
                <div className="w-full md:w-1/3 lg:w-2/4 p-4">
                  {selectedEntry ? (
                    <EntryDetails entry={selectedEntry} onBack={goBack} />
                  ) : (
                    <>
                      <EntryList entries={entries} onDelete={onDelete} onSelect={viewEntry} />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DailyJournal;
