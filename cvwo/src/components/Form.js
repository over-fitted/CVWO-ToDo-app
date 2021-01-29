import React from "react";

// handles creating tasks

const Form = ({ inputTxt, setInputTxt , todos, setTodos, setMode }) => {
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

    const modeHandler = e =>{
        setMode(e.target.value)
    }

    return(
        <form>
            <input onChange={inputHandler} value={inputTxt} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
                {/*font awesome logo */}
            </button>
            <div className="select">
                <select name="todos" onChange={modeHandler} className="filter-todo">
                <option value="uncompleted">Uncompleted</option>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                </select>
            </div>
        </form>
    )
}

export default Form