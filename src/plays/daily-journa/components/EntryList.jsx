import React from 'react';

const EntryList = ({ entries, onSelect }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2>Past Entries</h2>
    {entries.length === 0 ? <p>No entries found</p> : null}
    <ul>
      {entries.map((entry) => (
        <li
          className="cursor-pointer hover:bg-gray-100 p-2 rounded"
          key={entry.id}
          onClick={() => onSelect(entry)}
        >
          <h3>{entry.date}</h3>
          <p>{entry.text.substring(0, 100)}...</p>
          <p>
            <strong>Mood:</strong> {entry.mood}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

export default EntryList;
