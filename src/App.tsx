import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import { ITodo } from './interfaces';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos(prevTodos => [newTodo, ...prevTodos]);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />

        <TodoList todos={todos}/>
      </div>
    </>
  );
};

export default App;
