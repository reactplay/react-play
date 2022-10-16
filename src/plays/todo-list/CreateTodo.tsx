import React, { useState } from "react";
import './TodoList.css';

// Helper to generate todo id
const generateTodoId = () => "todo-id" + Math.random().toString(16).slice(2);

const CreateTodo = ({handleCreateTodo}:{handleCreateTodo:({id,title}:{id:string,title:string})=>void}) => {
    const [title, setTitle] = useState<string>("");

    const handleSubmit =(e:React.SyntheticEvent)=>{
        e.preventDefault();
        handleCreateTodo({id:generateTodoId(),title});
        setTitle("");
    }

    return (
        <form className="create-todo-container" onSubmit={handleSubmit}>
            <textarea className="todo-title" value={title} onChange={(e) => setTitle(e.target.value)} rows={1} placeholder="Enter todo" />
            <button className="create-button" type="submit">Create</button>
        </form>
    );
}

export default CreateTodo;