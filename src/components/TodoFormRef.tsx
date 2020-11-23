import React, { useRef } from 'react';

interface ITodoFormRef {
  onAdd: (title: string) => void,
};

const TodoFormRef = ({ onAdd }: ITodoFormRef) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    const title = ref.current!.value;
    if (evt.key === 'Enter' && title) {
      onAdd(title)
      ref.current!.value = '';
    }
  };

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
        placeholder="Добавьте новое дело"
      />
      <label htmlFor="title" className="active">Добавьте новое дело</label>
    </div>
  );
};

export default TodoFormRef;