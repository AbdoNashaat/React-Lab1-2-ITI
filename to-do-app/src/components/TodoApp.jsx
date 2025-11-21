import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import todosData from '../data/todos.json';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from JSON on mount
  useEffect(() => {
    setTodos(todosData);
  }, []);

  // Add new todo
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Edit todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="min-vh-100 py-5 bg-danger">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
              <div className="card-header bg-gradient text-black text-center py-4" >
                <h1 className="display-5 fw-bold mb-0">My Todo List</h1>
              </div>

              <div className="card-body p-4">
                <TodoForm addTodo={addTodo} />
                <TodoList
                  todos={todos}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              </div>

              <div className="text-center text-muted small">
                {todos.filter(t => !t.completed).length} active • {todos.filter(t => t.completed).length} completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;