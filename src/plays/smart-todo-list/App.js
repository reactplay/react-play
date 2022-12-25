// All necessary dependences
import { useEffect, useRef, useState } from 'react';
import { BsPencil } from 'react-icons/bs';
import Logo from './assets/logo.png';
import Alert from './components/Alert';
import DeleteModal from './components/DeleteModal';
import Filter from './components/Filter';
import TodoList from './components/TodoList';
import { useGlobalContext } from './context/appContext';

// App
function App() {
  // All necessary states
  const [text, setText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditId] = useState(null);
  const editRef = useRef();

  const { isModalOpen, tasks, setTasks, filterdTasks, showAlert, alert, setAlert } =
    useGlobalContext();

  // Form submit handler
  const submitHandler = (e) => {
    // Reset default behavior
    e.preventDefault();

    if (!text) {
      // if input is empty
      showAlert(true, 'Field is required!', 'danger');
    } else if (text && isEditing) {
      // Update the item & states
      const updatedTasks = tasks.map((item) => {
        if (item.id === editID) {
          return {
            ...item,
            title: text,
            createdAt: new Date(),
            complete: false
          };
        } else {
          return item;
        }
      });
      setTasks(updatedTasks);
      setText('');
      setEditId(null);
      setIsEditing(false);

      // Update item alert
      setAlert({ show: true, msg: 'Updated Successfully!', type: 'success' });
    } else {
      // Add item
      const newTask = {
        id: tasks.length + 1,
        createdAt: new Date(),
        complete: false,
        title: text
      };
      setTasks([newTask, ...tasks]);
      setText('');

      // Success Alert
      showAlert(true, 'Added successfully!', 'success');
    }
  };

  // Edit specific task
  const editHandler = (id) => {
    const spesificItem = tasks.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setText(spesificItem.title);
  };

  useEffect(() => {
    if (editRef.current) {
      const end = editRef.current.value.length;
      editRef.current.setSelectionRange(end, end);
      editRef.current.focus();
    }
  }, [isEditing]);

  return (
    <section id="wa_todo-list">
      {isModalOpen && <DeleteModal />}
      <div className="wrapper">
        <div className="wa_header">
          <div className="wa_logo-area">
            <img alt="to do list" src={Logo} width="100%" />
          </div>
          {alert.show && <Alert {...alert} list={tasks} removeAlert={showAlert} />}
          <Filter />
        </div>
        <div className="wa_body">
          {filterdTasks.length > 0 ? (
            <TodoList editHandler={editHandler} filterdTasks={filterdTasks} />
          ) : (
            <p className="empty">No item found!</p>
          )}
        </div>
        <div className="wa_footer">
          <form onSubmit={submitHandler}>
            <div className="wa_form-group">
              <span>
                <BsPencil fill="#fff" />
              </span>
              <input
                className="wa_form-control"
                placeholder="Enter task"
                ref={editRef}
                type="text"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <button className="wa_btn">{isEditing ? 'Update' : 'Add Item'}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
