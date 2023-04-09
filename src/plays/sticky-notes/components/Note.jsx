import React from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const Note = ({ note, handleDelete, handleEdit }) => {
  return (
    <div
      className={`${
        note.bg ? note.bg : 'bg-yellow-300'
      } p-5 pt-10 w-[280px] min-h-[200px] relative break-words flex flex-col`}
    >
      <p className="text-white capitalize text-lg pt-2">{note.body}</p>
      <a
        className="pt-5 mt-auto block text-blue-900"
        href={`https://twitter.com/intent/tweet?text="${note.body}`}
        rel="noreferrer"
        target="_blank"
      >
        Tweet
      </a>{' '}
      <button
        className="absolute top-2 right-10 text-black font-bold text-xl bg-green-500 p-1 rounded-full mr-2"
        onClick={() => handleEdit(note.id)}
      >
        <AiOutlineEdit fill="white" />
      </button>
      <button
        className="absolute top-2 right-4 text-black font-bold text-xl bg-red-500 p-1 rounded-full"
        onClick={() => handleDelete(note.id)}
      >
        <AiOutlineDelete fill="white" />
      </button>
    </div>
  );
};

export default Note;
