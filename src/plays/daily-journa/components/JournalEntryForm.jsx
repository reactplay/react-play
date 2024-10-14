import { useState } from 'react';

const JournalEntryForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [mood, setMood] = useState('Happy');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      id: Date.now(),
      text,
      mood,
      tags: tags.split(' ').map((tag) => tag.trim()),
      date: new Date().toLocaleDateString()
    };
    onSubmit(newEntry);
    setText('');
    setMood('Happy');
    setTags('');
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write your journal entry here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="excited">Excited</option>
        <option value="anxious">Anxious</option>
      </select>
      <input
        placeholder="Add tags (comma-separated)"
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Add Entry
      </button>
    </form>
  );
};

export default JournalEntryForm;
