import React from 'react';
import TodoFormRef from './TodoFormRef';

interface ITodoForm {
  onAdd: (title: string) => void,
};

const TodoForm = ({ onAdd }: ITodoForm) => {
  return (
    <TodoFormRef onAdd={onAdd}/>
  );
};

export default TodoForm;
