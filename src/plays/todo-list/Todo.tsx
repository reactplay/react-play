import React from "react";
import './TodoList.css';

const Todo = ({ id, title, status,toggleTodoStatus }: { id: string, title: string, status: boolean,toggleTodoStatus:(id:string)=>void }) => {
    return (
        <div className={`todo-wrapper ${status ? "active" : ""}`} onClick={()=>toggleTodoStatus(id)}>
            <div className={`status-circle ${status ? "active" : ""}`}></div>
            <p className="todo-title">{title}</p>
        </div>
    );
}

export default Todo;