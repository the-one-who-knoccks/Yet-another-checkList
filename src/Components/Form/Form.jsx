import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() + 10000 }
    ]);

  }

  return (
    <form>
      <input type="text" className="todo-input" onChange={inputTextHandler} />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">Todos</option>
          <option value="completed">Completos</option>
          <option value="uncompleted">Incompletos</option>
        </select>
      </div>
    </form>
  );
};


export default Form;