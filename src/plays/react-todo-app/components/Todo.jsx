import React from 'react';

import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa';

const Todo = ({ text, todo, todos, setInput, setTodos, setEditId, setIsEditing }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    );
  };

  // Edit Handler - set id of the edit item and set new input value
  const editHandler = () => {
    setIsEditing(true);
    const newId = todos.filter((item) => item.id === todo.id)[0].id;
    setEditId(newId);
    const newInput = todos.filter((item) => item.id === todo.id)[0].text;
    setInput(newInput);
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <FaCheck />
      </button>
      <button className="edit-btn" onClick={editHandler}>
        <FaEdit />
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Todo;
