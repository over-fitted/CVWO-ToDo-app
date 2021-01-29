import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import Todolist from "./components/Todolist"



function App() {
  // storage for all states, drill into children
  const[inputTxt, setInputTxt] = useState('');
  const[todos, setTodos] = useState([])
  const[mode, setMode] = useState("uncompleted");
  const[modeTodos, setModeTodos] = useState([])

  // modifies tasks to-be-rendered based on mode
  const modeHandler = () =>{
    switch(mode){
      case "completed": setModeTodos(todos.filter(todo => todo.completed)); break;
      case "uncompleted": setModeTodos(todos.filter(todo => !todo.completed)); break;
      default: setModeTodos(todos)
    }
  }

  useEffect(() =>{
    modeHandler();
  }, [todos, mode]) // watches for changes in todos and mode

  return (
    <div className="App">
      <header>
        <h1>
          Andrew's CVWO todo
        </h1>
      </header>
      <Form inputTxt={inputTxt} setInputTxt={setInputTxt} todos={todos} setTodos={setTodos} setMode={setMode}/>
      <Todolist todos={todos} setTodos={setTodos} modeTodos={modeTodos}/> 
    </div>
  );
}

export default App;
