import React from 'react';
import { ITodo } from '../interfaces';

interface ITodoItem {
  todo: ITodo,
};

const TodoItem = ({ todo }: ITodoItem) => {
  return (
    <li className={`todo${todo.completed ? ' completed' : ''}`}>
      <label>
        <input type="checkbox" checked={todo.completed}/>
        <span>{todo.title}</span>
        <i className="material-icons red-text">delete</i>
      </label>
    </li>
  );
};

export default TodoItem;
