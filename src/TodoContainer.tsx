import React, { useEffect, useState } from 'react';
import TodoCreateForm from './TodoCreateForm';
import TodoAPI, { Todo, TodoViewDTO } from './TodoAPI';
import TodoListItem from './TodoListItem';
import TodoEditForm from './TodoEditForm';
import { ListGroup } from 'reactstrap';
import { If } from './components/If';
import TodoListToolbar from './TodoListToolbar';
import EmptyList from './components/EmptyList';

export default function TodoContainer() {
  const [editing, setEditing] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [viewModel, setViewModel] = useState<TodoViewDTO>({
    todoCount: 0,
    pendingTodosCount: 0,
    completedTodosCount: 0,
    todos: []
  });
  const [filter, setFilter] = useState<'' | 'completed' | 'pending'>('');

  async function fetchTodos() {
    let data;
    setLoading(true);

    try {
      if (filter === 'pending') {
        data = await TodoAPI.fetchPending();
      } else if (filter === 'completed') {
        data = await TodoAPI.fetchCompleted();
      } else {
        data = await TodoAPI.fetchAll();
      }

      setViewModel(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleFilterCompleted() {
    if (filter === 'completed') {
      return clearFilter();
    }
    setFilter('completed');
  }

  function handleFilterPending() {
    if (filter === 'pending') {
      return clearFilter();
    }
    setFilter('pending');
  }

  function clearFilter() {
    setFilter('');
  }

  async function saveTodo(todo: Partial<Todo>) {
    await TodoAPI.save(todo);
    await fetchTodos();
  }

  async function handleUpdateDescription(todo: Partial<Todo>) {
    await TodoAPI.updateDescription(todo);
    await fetchTodos();
  }

  async function handleToggleAllStatus() {
    await TodoAPI.toggleAllStatus();
    await fetchTodos();
  }

  async function handleToggleStatus(id: number) {
    await TodoAPI.toggleStatus(id);
    await fetchTodos();
  }

  async function handleRemoveById(id: number) {
    await TodoAPI.delete(id);
    await fetchTodos();
  }

  async function handleRemoveCompleted() {
    await TodoAPI.deleteCompleted();
    await fetchTodos();
  }

  async function handleRemoveAll() {
    await TodoAPI.deleteAll();
    await fetchTodos();
  }

  function allCompleted() {
    return viewModel.todoCount !== 0 && viewModel.completedTodosCount === viewModel.todoCount;
  }

  function handleToggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    fetchTodos();
  }, [filter]);

  return (
    <>
      <TodoCreateForm onSubmit={saveTodo} onToggleAll={handleToggleAllStatus} allCompleted={allCompleted()} />
      <If test={viewModel.todoCount !== 0 && !viewModel.todos.length}>
        <EmptyList />
      </If>
      <ListGroup flush>
        {viewModel.todos.map(todo =>
          editing !== todo.id ? (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onToggleStatus={handleToggleStatus}
              onRemove={handleRemoveById}
              onEdit={setEditing}
            />
          ) : (
            <TodoEditForm key={todo.id} todo={todo} onCancel={() => setEditing(0)} onSubmit={handleUpdateDescription} />
          )
        )}
      </ListGroup>
      <If test={viewModel.todoCount > 0}>
        <TodoListToolbar
          completedTodosCount={viewModel.completedTodosCount}
          pendingTodosCount={viewModel.pendingTodosCount}
          filter={filter}
          onFilterCompleted={handleFilterCompleted}
          onFilterPending={handleFilterPending}
          onRemoveAll={handleRemoveAll}
          onRemoveCompleted={handleRemoveCompleted}
          showMenu={showMenu}
          onToggleMenu={handleToggleMenu}
        />
      </If>
    </>
  );
}
