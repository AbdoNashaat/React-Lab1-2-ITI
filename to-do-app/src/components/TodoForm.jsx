import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group input-group-lg shadow-sm">
        <input
          type="text"
          className="form-control rounded-start-pill border-0"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ paddingLeft: '1.5rem' }}
        />
        <button
          type="submit"
          className="btn btn-primary rounded-end-pill px-5 fw-bold">
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoForm;