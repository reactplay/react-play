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
  editId
}) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) return;
    // If editing, replace the old todo with the new one
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
      // If not editing, add new todo to the list
      setTodos([...todos, { text: input, completed: false, id: Math.random() * 1000 }]);
      setInput('');
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form className="react-todo-form">
      <div className="react-todo-input">
        <input className="todo-input" type="text" value={input} onChange={inputHandler} />
        <button className="todo-button" type="submit" onClick={submitHandler}>
          <FaPlusSquare />
        </button>
      </div>
      <div className="select-todo">
        <select className="filter-todo options" name="todos" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Input;
