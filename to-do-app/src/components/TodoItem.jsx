const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {


  return (
    <li className="list-group-item d-flex align-items-center py-3 border-bottom">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="form-check-input me-3"
        style={{ width: '1.5rem', height: '1.5rem' }}
      />

      <span
        className={`flex-grow-1 fs-5 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="btn btn-sm btn-outline-danger ms-3"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;