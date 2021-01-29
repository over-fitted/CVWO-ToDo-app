import React from "react";

// handles creating tasks

const Form = ({ inputTxt, setInputTxt , todos, setTodos }) => {
    const inputHandler = e =>{
        setInputTxt(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault(); // prevents submit button from refreshing page
        setTodos([
            ...todos, {
                text: inputTxt, 
                completed: false,
                id: Math.random() //toDo
            }
        ])
        setInputTxt(""); //resets input field after submission
    }

    return(
        <form>
            <input onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form