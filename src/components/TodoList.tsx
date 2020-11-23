import React from 'react';
import TodoItem from './TodoItem';
import { ITodo } from '../interfaces';

interface ITodoList {
  todos: ITodo[],
  onToggle: (id: number) => void,
  onRemove: (id: number) => void,
};

const TodoList = ({ todos, onToggle, onRemove }: ITodoList) => {
  if (todos.length === 0) {
    return <p className="center">Пока дел нет</p>
  }

  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
