import React from 'react';

const TodoForm = () => {
  return (
    <div className="input-field mt2">
      <input type="text" id="title" placeholder="Добавьте новое дело"/>
      <label htmlFor="title" className="active">Добавьте новое дело</label>
    </div>
  );
};

export default TodoForm;
