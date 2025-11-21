import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-5 text-muted">
        <h3>No todos yet!</h3>
        <p>Add one above to get started</p>
      </div>
    );
  }

  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;