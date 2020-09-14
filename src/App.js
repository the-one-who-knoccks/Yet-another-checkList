import React, { useState } from 'react';
import "./App.css";

import Form from './Components/Form/Form';
import ToDoList from './Components/ToDoList/ToDoList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilters] = useState('all');
  const [filtered, setFiltered] = useState([]);

  const filterHandler = () => {
    switch (filter) {
      case 'completed':
        setFiltered(todos.filter(todo => todo.completed === true));
        break;
      case 'uncomplited':
        setFiltered(todos.filter(todo => todo.uncompleted === false));
        break;
      default:
        setFiltered(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Yet Another Checklist </h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setFilters={setFilters}
      />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;