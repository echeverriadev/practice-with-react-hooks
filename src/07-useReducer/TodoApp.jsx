import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';

export const TodoApp = () => {
  const {todos, todosCount, todosPendingCount, handleDelete, handleToggleTodo, handleNewTodo} = useTodos();

  return (
    <>
      <h1>ToDo App: {todosCount}, <small>pendientes: {todosPendingCount}</small></h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDelete} onToggleTodo={handleToggleTodo}/>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  )
}
