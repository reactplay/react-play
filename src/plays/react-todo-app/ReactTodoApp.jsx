import PlayHeader from 'common/playlists/PlayHeader';
import { useState, useEffect } from 'react';
import useLocalStorage from 'common/hooks/useLocalStorage';

// css file
import './react-todo.css';

// components
import Input from './components/Input';
import TodoList from './components/TodoList';

function ReactTodoApp(props) {
  // Your Code Start below.

  const [input, setInput] = useState('');
  const [todos, setTodos] = useLocalStorage('react-todo-app/todos', []);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  // Set states for editHandler
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFiltered(todos.filter((todo) => todo.completed === true));

          break;
        case 'uncompleted':
          setFiltered(todos.filter((todo) => todo.completed === false));

          break;
        default:
          setFiltered(todos);

          break;
      }
    };

    filterHandler();
  }, [status, todos]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="todo-play-body">
            <div className="todo-top-banner">
              <h1>Todo List</h1>
            </div>
            <Input
              editId={editId}
              input={input}
              isEditing={isEditing}
              setEditId={setEditId}
              setInput={setInput}
              setIsEditing={setIsEditing}
              setStatus={setStatus}
              setTodos={setTodos}
              todos={todos}
            />
            <TodoList
              editId={editId}
              filtered={filtered}
              input={input}
              setEditId={setEditId}
              setInput={setInput}
              setIsEditing={setIsEditing}
              setTodos={setTodos}
              todos={todos}
            />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ReactTodoApp;
