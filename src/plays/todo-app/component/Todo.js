import { Component } from 'react';
import './Todo.css';
import { MdDelete, MdCheckCircle } from 'react-icons/md';

class Todo extends Component {
  constructor() {
    super();
    let task;
    if (localStorage.getItem('todo-tasks')) {
      let str = localStorage.getItem('todo-tasks');
      task = JSON.parse(str);
      // console.log('Your Tasks', task);
    } else {
      task = [
        { task: 'Added Task Example', id: Math.random() * 1000, completed: false },
        { task: 'completed Task Example', id: Math.random() * 1000, completed: true }
      ];
      // console.log('Predefined Tasks', task);
    }

    this.state = {
      tasks: task,
      compTasks: [],
      currTask: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      currTask: e.target.value
    });
    this.updateLocalStorage();
  };

  handleAddTask = () => {
    if (this.state.currTask === '') {
      alert('Please, Enter Your Task...');
    } else {
      this.setState({
        tasks: [
          ...this.state.tasks,
          { task: this.state.currTask, id: Math.random() * 1000, completed: false }
        ],
        currTask: ''
      });
    }
    this.updateLocalStorage();
  };

  handleDelete = (id) => {
    let narr = this.state.tasks.filter((taskObj) => {
      return taskObj.id !== id;
    });
    this.setState({
      tasks: [...narr]
    });
    this.updateLocalStorage();
  };

  handleComplete = (id) => {
    let val = this.state.tasks.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }

      return item;
    });
    this.setState({
      tasks: [...val]
    });
    this.updateLocalStorage();
  };

  clearTask = (id) => {
    let narr = this.state.tasks.filter((taskObj) => {
      return taskObj.completed !== id;
    });
    this.setState({
      tasks: [...narr]
    });
    this.updateLocalStorage();
  };

  updateLocalStorage() {
    let stringifyArr = JSON.stringify(this.state.tasks);
    localStorage.setItem('todo-tasks', stringifyArr);
  }

  render() {
    return (
      <div className="Todo-container">
        <div className="title">Todo App</div>
        <div className="input-box">
          <input
            placeholder="Enter your task"
            type="text"
            value={this.state.currTask}
            onChange={this.handleChange}
          />
          <button onClick={this.handleAddTask}>Add Task</button>
        </div>

        <div className="reset-box">
          <button onClick={() => this.clearTask(false)}>Clear Added Task</button>
          <button onClick={() => this.clearTask(true)}>Clear Done Task</button>
        </div>

        <ul className="tasks">
          {this.state.tasks.map((taskObj) => (
            <>
              {taskObj.completed === false ? (
                <li key={taskObj.id}>
                  <div className="check">
                    <MdCheckCircle onClick={() => this.handleComplete(taskObj.id)} />
                  </div>
                  <p className="text">
                    { taskObj.task }
                  </p>
                  <div className="del">
                  <MdDelete onClick={() => this.handleDelete(taskObj.id)} />
                  </div>
                </li>
              ) : (
                <li key={taskObj.id}>
                  <p>
                    <s>{taskObj.task}</s>
                  </p>
                  <div className="del">
                  <MdDelete onClick={() => this.handleDelete(taskObj.id)} />
                  </div>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
