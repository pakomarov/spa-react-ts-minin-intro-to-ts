import React, { useState } from 'react';

interface ITodoFormState {
  onAdd: (title: string) => void,
};

const TodoFormState = ({ onAdd }: ITodoFormState) => {
  const [title, setTitle] = useState('');
  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  const keyPressHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Добавьте новое дело"
      />
      <label htmlFor="title" className="active">Добавьте новое дело</label>
    </div>
  );
};

export default TodoFormState;