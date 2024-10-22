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
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit}>
      <textarea
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        placeholder="How was your day like? "
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex flex-raw ">
        <select className="mr-5" value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="excited">Excited</option>
          <option value="anxious">Anxious</option>
        </select>
        <input
          className=""
          placeholder="Tags: Home Family ..."
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </div>
      <button
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mt-6"
        type="submit"
      >
        Add Entry
      </button>
    </form>
  );
};

export default JournalEntryForm;
