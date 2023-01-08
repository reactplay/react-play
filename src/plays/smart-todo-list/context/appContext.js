import { createContext, useContext, useEffect, useState } from 'react';

const appContext = createContext();

// Get the items from localStorage
const getLocalStorage = () => {
  let task = localStorage.getItem('task');
  if (task) {
    return JSON.parse(task);
  } else {
    return [];
  }
};
const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState(getLocalStorage());
  const [filteredText, setFilteredText] = useState('all');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const [deleteId, setDeleteId] = useState(null);
  const [allSelected, setAllSelected] = useState(false);

  // Show alert method
  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  // Filter Tasks
  const filterdTasks = tasks.filter((task) => {
    if (filteredText === 'completed') {
      return task.complete === true;
    } else if (filteredText === 'uncompleted') {
      return task.complete === false;
    } else {
      return task;
    }
  });

  // Complete task method
  const completeHandler = (id) => {
    setTasks(
      tasks.map((item) => {
        if (item.id === id) {
          return { ...item, complete: true };
        }

        // Task Complete alert
        showAlert(true, 'Task Completed !', 'complete');

        return item;
      })
    );
  };

  // Remove specific task
  const removeItem = () => {
    if (deleteId) {
      showAlert(true, 'Deleted Successfully!', 'warning');
      setTasks(tasks.filter((item) => item.id !== deleteId));
    }
    setIsModalOpen(false);
    setDeleteId(null);
  };

  // Remover all tasks
  const removeAllItems = () => {
    if (allSelected) {
      setTasks([]);
      setIsModalOpen(false);
    }
  };

  // Save items to local storage
  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <appContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        filterdTasks,
        setFilteredText,
        tasks,
        setTasks,
        removeItem,
        alert,
        showAlert,
        setAlert,
        setDeleteId,
        allSelected,
        setAllSelected,
        removeAllItems,
        completeHandler
      }}
    >
      {children}
    </appContext.Provider>
  );
};

// Custom Hook
const useGlobalContext = () => {
  return useContext(appContext);
};

export { AppProvider, useGlobalContext };
