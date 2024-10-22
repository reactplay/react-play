import React from 'react';

const EntryList = ({ entries, onSelect, onDelete }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-center font-semibold text-pink-500">Past Entries</h2>
    {entries.length > 0 ? (
      <button
        className="mt-4 mr-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={onDelete}
      >
        Delete entries
      </button>
    ) : null}
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
