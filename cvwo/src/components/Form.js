import React from "react";

// handles creating tasks

const Form = ({ setInputText }) => {
    const inputHandler = e =>{
        setInputText(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault(); // prevents submit button from refreshing page
    }

    return(
        <form>
            <input onChange={inputHandler} type="text" class="todo-input" />
            <button onClick={submitHandler} class="todo-button" type="submit">
                <i class="fas fa-plus-square"></i>
            </button>
            <div class="select">
                <select name="todos" class="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form