import { getPlayById } from 'meta/play-meta-util';
import PlayHeader from 'common/playlists/PlayHeader';
import { useState, useEffect } from 'react';
import useLocalStorage from 'common/hooks/useLocalStorage';

// css file
import './react-todo.css';

// components
import Input from './components/Input';
import TodoList from './components/TodoList';

function ReactTodoApp(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  const [input, setInput] = useState('');
  const [todos, setTodos] = useLocalStorage('react-todo-app/todos', []);
  const [status, setStatus] = useState('all');
  const [filtered, setFiltered] = useState([]);

  //Set states for editHandler
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
      <div className='play-details'>
        <PlayHeader play={play} />
        <div className='play-details-body'>
          {/* Your Code Starts Here */}
          <div className='todo-play-body'>
            <div className='todo-top-banner'>
              <h1>Todo List</h1>
            </div>
            <Input
              todos={todos}
              setTodos={setTodos}
              input={input}
              setInput={setInput}
              setStatus={setStatus}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editId={editId}
              setEditId={setEditId}
            />
            <TodoList
              todos={todos}
              setTodos={setTodos}
              input={input}
              setInput={setInput}
              editId={editId}
              setEditId={setEditId}
              setIsEditing={setIsEditing}
              filtered={filtered}
            />
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ReactTodoApp;
