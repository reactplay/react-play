import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const Input = ({
  input,
  setInput,
  todos,
  setTodos,
  setStatus,
  isEditing,
  setIsEditing,
  editId,
  setEditId,
}) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    //If editing, replace the old todo with the new one
    else if (input.length > 0 && isEditing === true) {
      setTodos(
        todos.map((item) => {
          if (item.id === editId) {
            return { ...item, text: input };
          }
          return item;
        })
      );
      setIsEditing(false);
      setInput('');
    } else {
      //If not editing, add new todo to the list
      setTodos([
        ...todos,
        { text: input, completed: false, id: Math.random() * 1000 },
      ]);
      setInput('');
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className='react-todo-form'>
      <div className='react-todo-input'>
        <input
          onChange={inputHandler}
          value={input}
          type='text'
          className='todo-input'
        />
        <button onClick={submitHandler} className='todo-button' type='submit'>
          <FaPlusSquare />
        </button>
      </div>
      <div className='select-todo'>
        <select
          onChange={statusHandler}
          name='todos'
          className='filter-todo options'
        >
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Input;
