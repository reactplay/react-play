import React from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  setTodos,
  input,
  setInput,
  editId,
  setEditId,
  filtered,
  setIsEditing,
}) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filtered.map((todo) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            editId={editId}
            setEditId={setEditId}
            input={input}
            setInput={setInput}
            setIsEditing={setIsEditing}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
