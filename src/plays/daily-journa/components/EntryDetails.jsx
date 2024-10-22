import React from 'react';

const EntryDetails = ({ entry, onBack }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-xl font-semibold mb-2">{entry.date}</h2>
    <p>
      <strong>Mood:</strong> {entry.mood}
    </p>
    <p>{entry.text}</p>
    {entry.tags.length > 0 && (
      <p>
        <strong>Tags:</strong> {entry.tags.join(', ')}
      </p>
    )}
    <button
      className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
      onClick={onBack}
    >
      Back
    </button>
  </div>
);

export default EntryDetails;
