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

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <div className="min-h-screen flex flex-col">
              <div className="flex flex-grow p-4">
                <div className="w-full md:w-2/3 lg:w-2/4 p-4">
                  <h1 className="text-2xl font-bold mb-4">Daily Journal</h1>
                  <p className="mb-6 text-gray-600">Write your thoughts and feelings here.</p>
                  <JournalEntryForm onSubmit={addEntry} />
                </div>
                <div className="w-full md:w-1/3 lg:w-2/4 p-4">
                  {selectedEntry ? (
                    <EntryDetails entry={selectedEntry} onBack={goBack} />
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold mb-4">Entries</h2>
                      <EntryList entries={entries} onSelect={viewEntry} />
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
