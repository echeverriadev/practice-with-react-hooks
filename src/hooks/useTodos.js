import { useEffect, useReducer } from "react";
import { todoReducer } from '../07-useReducer/TodoReducer'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer( todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: 'add',
      payload: todo
    }
    dispatchTodo(action);
  }

  const handleDelete = (id) => {
    const action = {
      type: 'delete',
      payload: id
    }
    dispatchTodo(action);
  }

  const handleToggleTodo = (id) => {
    const action = {
      type: 'toggle',
      payload: id
    }
    dispatchTodo(action);
  }

  return {
    todos,
    todosCount: todos.length,
    todosPendingCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDelete,
    handleToggleTodo,
  }
};
