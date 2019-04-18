import Axios from 'axios';

export interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

export interface TodoViewDTO {
  todoCount: number;
  completedTodosCount: number;
  pendingTodosCount: number;
  todos: Todo[];
}

export default {
  save(todo: Partial<Todo>) {
    return Axios.post('/todos', todo);
  },

  updateDescription(todo: Partial<Todo>) {
    return Axios.patch(`/todos/${todo.id}`, { description: todo.description });
  },

  async fetchAll(): Promise<TodoViewDTO> {
    const { data } = await Axios.get('/todos');

    return data;
  },

  async fetchCompleted(): Promise<TodoViewDTO> {
    const { data } = await Axios.get('/todos/completed');

    return data;
  },

  async fetchPending(): Promise<TodoViewDTO> {
    const { data } = await Axios.get('/todos/pending');

    return data;
  },

  delete(id: number) {
    return Axios.delete(`/todos/${id}`);
  },

  deleteAll() {
    return Axios.delete('/todos');
  },

  deleteCompleted() {
    return Axios.delete('/todos/completed');
  },

  toggleAllStatus() {
    return Axios.patch('/todos/toggle-all');
  },

  toggleStatus(id: number) {
    return Axios.patch(`/todos/${id}/toggle`);
  }
};
