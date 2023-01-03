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
  setIsEditing
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((todo) => (
          <Todo
            editId={editId}
            input={input}
            key={todo.id}
            setEditId={setEditId}
            setInput={setInput}
            setIsEditing={setIsEditing}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
            todos={todos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
