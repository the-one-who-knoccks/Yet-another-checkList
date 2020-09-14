import React, { useState, useEffect } from 'react';
import "./App.css";

import Form from './Components/Form/Form';
import ToDoList from './Components/ToDoList/ToDoList';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilters] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);

  const filterHandler = () => {
    switch (filter) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
    let localTodo = JSON.parse(localStorage.getItem('todos'));
    setTodos(localTodo);
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
    <ToDoList
      filteredTodos={filteredTodos}
      setTodos={setTodos}
      todos={todos} />
  </div>
);
};

export default App;