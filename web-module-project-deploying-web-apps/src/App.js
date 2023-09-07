import React, { useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([ ...todos, newTodo ]);
  };

  const toggleCompleted = (todoId) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => 
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="App">
      <h2>My Todo App</h2>
      <TodoList 
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;