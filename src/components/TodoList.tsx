import React from 'react';
import TodoItem from './TodoItem';
import { ITodo } from '../interfaces';

interface ITodoList {
  todos: ITodo[],
};

const TodoList = ({ todos }: ITodoList) => {
  return (
    <ul>
      {todos.map(todo => {
        return (
          <TodoItem todo={todo} key={todo.id}/>
        );
      })}
    </ul>
  );
};

export default TodoList;
