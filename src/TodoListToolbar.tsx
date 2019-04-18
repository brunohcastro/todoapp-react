import React from 'react';
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';
import { If } from './components/If';
import Toolbar from './components/Toolbar';
import TodoCounter from './components/TodoCounter';
import MenuDropdown from './components/ToolbarMenu';

export interface TodoListToolbarProps {
  pendingTodosCount: number;
  completedTodosCount: number;
  showMenu: boolean;
  onToggleMenu: () => void;
  filter: string;
  onFilterCompleted: () => void;
  onFilterPending: () => void;
  onRemoveCompleted: () => void;
  onRemoveAll: () => void;
}

export default function TodoListToolbar(props: TodoListToolbarProps) {
  return (
    <Toolbar>
      <TodoCounter>
        <If test={props.pendingTodosCount === 0}>Nenhuma tarefa pendente</If>
        <If test={props.pendingTodosCount === 1}>1 tarefa pendente</If>
        <If test={props.pendingTodosCount > 1}>{props.pendingTodosCount} tarefas pendentes</If>
      </TodoCounter>
      <Dropdown style={{ float: 'right' }} isOpen={props.showMenu} toggle={props.onToggleMenu}>
        <MenuDropdown caret />
        <DropdownMenu right>
          <DropdownItem
            onClick={props.onFilterCompleted}
            active={props.filter === 'completed'}
            disabled={props.completedTodosCount === 0 && props.filter !== 'completed'}
          >
            Completos
          </DropdownItem>
          <DropdownItem
            onClick={props.onFilterPending}
            active={props.filter === 'pending'}
            disabled={props.pendingTodosCount === 0 && props.filter !== 'pending'}
          >
            Pendentes
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={props.onRemoveCompleted}>Apagar Completos</DropdownItem>
          <DropdownItem onClick={props.onRemoveAll}>Apagar Todos</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Toolbar>
  );
}
