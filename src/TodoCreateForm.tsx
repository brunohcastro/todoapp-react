import React, { useState } from 'react';
import { Todo } from './TodoAPI';
import TodoInput from './components/TodoInput';
import FlatButton from './components/FlatButton';
import FormWrapper from './components/FormWrapper';

export interface TodoCreateFormProps {
  onToggleAll: () => void;
  onSubmit: (todo: Partial<Todo>) => void;
  allCompleted: boolean;
}

export default function TodoCreateForm(props: TodoCreateFormProps) {
  const [description, setDescription] = useState<string>('');

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!description || description === '') {
      return;
    }

    props.onSubmit({
      description
    });

    handleCancel();
  }

  function cancelOnEsc(e: any) {
    if (e.keyCode === 27) {
      handleCancel();
    }
  }

  function handleCancel() {
    setDescription('');
  }

  return (
    <FormWrapper style={{ display: 'flex' }}>
      <FlatButton
        type="button"
        color="default"
        onClick={props.onToggleAll}
        style={{ color: props.allCompleted ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.2)' }}
      >
        <span className="material-icons">done_all</span>
      </FlatButton>
      <TodoInput
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        autoFocus
        onKeyDown={cancelOnEsc}
      />
      <FlatButton type="submit" color="primary" style={{ width: 60 }} onClick={handleSubmit}>
        <span className="material-icons">add</span>
      </FlatButton>
    </FormWrapper>
  );
}
