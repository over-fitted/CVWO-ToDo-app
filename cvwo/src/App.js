import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import Todolist from "./components/Todolist"



function App() {
  // storage for all states, drill into children
  const[inputTxt, setInputTxt] = useState('');
  const[todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>
          Andrew's CVWO todo
        </h1>
      </header>
      <Form inputTxt={inputTxt} setInputTxt={setInputTxt} todos={todos} setTodos={setTodos}/>
      <Todolist/> 
    </div>
  );
}

export default App;
