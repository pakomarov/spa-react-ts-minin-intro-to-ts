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

  const toggleHandler = (id: number) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Вы уверены, что хотите удалить элемент?');
    if (shouldRemove) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm onAdd={addHandler} />

        <TodoList
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  );
};

export default App;
