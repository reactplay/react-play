import React from 'react';
import { FaPlusSquare } from 'react-icons/fa';

const Input = ({ input, setInput, todos, setTodos, setStatus }) => {

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (input.length > 0) {
            setTodos([
                ...todos, { text: input, completed: false, id: Math.random() * 1000 }
            ]);
            setInput('');
        }
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form className='react-todo-form'>
            <input onChange={inputHandler} value={input} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <FaPlusSquare />
            </button>
            <div className="select-todo">
                <select onChange={statusHandler} name="todos" className="filter-todo options">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Input;