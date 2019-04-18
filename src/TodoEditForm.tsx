import React, { useState } from 'react';
import { Todo } from './TodoAPI';
import ListItem from './components/ListItem';
import TodoInput from './components/TodoInput';
import FlatButton from './components/FlatButton';
import SaveButton from './components/SaveButton';

export interface TodoEditForm {
  todo: Todo;
  onCancel: () => void;
  onSubmit: (todo: Partial<Todo>) => void;
}

export default function TodoEditForm({ todo, ...props }: TodoEditForm) {
  const [description, setDescription] = useState<string>(todo.description);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!description || description === '') {
      return;
    }

    if (description === todo.description) {
      props.onCancel();
      return;
    }

    props.onSubmit({ id: todo.id, description });

    props.onCancel();
  }

  function cancelOnEsc(e: any) {
    if (e.keyCode === 27) {
      props.onCancel();
    }
  }

  return (
    <ListItem>
      <form style={{ display: 'flex' }}>
        <FlatButton type="button" color="warning" onClick={props.onCancel}>
          <span className="material-icons">close</span>
        </FlatButton>
        <TodoInput
          value={description}
          onChange={e => setDescription(e.target.value)}
          autoFocus
          onKeyDown={cancelOnEsc}
        />
        <SaveButton type="submit" color="success" onClick={handleSubmit}>
          <span className="material-icons">check</span>
        </SaveButton>
      </form>
    </ListItem>
  );
}
