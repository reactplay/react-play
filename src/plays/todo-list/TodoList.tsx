import React, { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";
import './TodoList.css';

export interface Todo {
    id: string,
    title: string,
    status: boolean
}

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleCreateTodo=({id,title}:{id:string,title:string})=>{
        setTodos([...todos,{id,title,status:false}]);
    }

    // rendering todos conditionally
    const renderTodos=({status, message}:{status:boolean,message:string})=>{
        const validTodos=todos.filter((todo)=>todo.status===status)
        if(!validTodos.length)return message;

        return (validTodos.map((todo)=><Todo id={todo.id} title={todo.title} status={todo.status} key={todo.id} toggleTodoStatus={toggleTodoStatus}/>))
    }

    const toggleTodoStatus =(id:string)=>{
        const todo = todos.find((curr)=>curr.id===id);
        console.log(id);


        if(!todo)return;
        todo.status=!todo.status;

        setTodos([...todos.filter((curr)=>curr.id!==id),todo]);
    }

    return (
        <div className="todo-container">
            <h2>Todo List</h2>
            <CreateTodo handleCreateTodo={handleCreateTodo}/>
            <div className="pending-todo-container">
                <h3>Pending todos:</h3>
                <div className="todos-container">
                    {
                        renderTodos({status:false,message:"No tasks to do"})
                    }
                </div>
            </div>
            <div className="done-todo-container">
                <h3>Done todos:</h3>
                <div className="todos-container">
                    {
                        renderTodos({status:true,message:"No tasks done yet"})
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList;