import React from 'react';
import { ITodo } from '../interfaces';

interface ITodoItem {
  todo: ITodo,
  onToggle: (id: number) => void,
  onRemove: (id: number) => void,
};

const TodoItem = ({ todo, onToggle, onRemove }: ITodoItem) => {
  const removeHandler = (evt: React.MouseEvent<HTMLElement, MouseEvent>) => {
    evt.preventDefault();

    onRemove(todo.id);
  }

  return (
    <li className={`todo${todo.completed ? ' completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle.bind(null, todo.id)}
        />
        <span>{todo.title}</span>
        <i
          className="material-icons red-text"
          onClick={removeHandler}
        >
          delete
        </i>
      </label>
    </li>
  );
};

export default TodoItem;
