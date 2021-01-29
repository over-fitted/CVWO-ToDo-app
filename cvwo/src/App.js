import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import Todolist from "./components/Todolist"



function App() {
  const[inputTxt, setInputTxt] = useState('');
  const[todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>
          Andrew's CVWO todo
        </h1>
      </header>
      <Form setInputTxt={setInputTxt}/>
      <Todolist todos={setTodos}/> 
    </div>
  );
}

export default App;
