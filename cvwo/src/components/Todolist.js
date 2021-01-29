import React from 'react'
import './Todo'
import Todo from './Todo'

const Todolist = ({ todos, setTodos, modeTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {modeTodos.map((todo) => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
                ))}
            </ul>
        </div>
    )
}

export default Todolist