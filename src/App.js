import React, { useState } from 'react';
import "./App.css";

import Form from './Components/Form/Form';
import ToDoList from './Components/ToDoList/ToDoList';

const App = () => {
  const [inputText, setInputText ] = useState('');
  const [todos, setTodos ] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>Yet Another Checklist </h1>
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <ToDoList />
    </div>
  );
};

export default App;