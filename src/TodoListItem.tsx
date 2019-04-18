import React from 'react';
import { Checkbox } from 'pretty-checkbox-react';
import ListItem from './components/ListItem';
import DeleteButton from './components/DeleteButton';
import CheckIcon from './components/CheckIcon';
import TodoContent from './components/TodoContent';
import ToggleStatusWrapper from './components/ToggleStatusWrapper';
import { Todo } from './TodoAPI';

export interface TodoListItemProps {
  todo: Todo;
  onToggleStatus: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number) => void;
}

export default function TodoListItem({ todo, ...props }: TodoListItemProps) {
  return (
    <ListItem>
      <ToggleStatusWrapper>
        <Checkbox
          color="success"
          animation="smooth"
          svg={CheckIcon}
          checked={todo.completed}
          onChange={() => props.onToggleStatus(todo.id)}
        />
      </ToggleStatusWrapper>

      <TodoContent
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.8)'
        }}
        onDoubleClick={() => props.onEdit(todo.id)}
      >
        {todo.description}
      </TodoContent>

      <DeleteButton color="danger" onClick={() => props.onRemove(todo.id)}>
        <span className="material-icons">delete</span>
      </DeleteButton>
    </ListItem>
  );
}
