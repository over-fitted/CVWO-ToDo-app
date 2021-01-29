import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {
    const delHandler = () => {
        setTodos(todos.filter(x => x.id !== todo.id))
    }
    const comHandler = () => {
        setTodos(todos.map(x => {
            return x.id === todo.id 
                        ? {
                            ...x,
                            completed: true
                        }
                        : x
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button onClick={comHandler}className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={delHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
        
    )
}

export default Todo