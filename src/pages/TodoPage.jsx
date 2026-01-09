import { useState } from "react";

function TodoPage() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = e => {
    e.preventDefault();
    if (!text.trim()) return;
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text: text.trim(), done: false }
    ]);
    setText("");
  };

  const toggleTodo = id => {
    setTodos(prev =>
      prev.map(t =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  return (
    <section>
      <h2>useState – Todos</h2>
      <form onSubmit={handleAdd}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="New todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                {todo.text}
              </span>
            </label>
            <button onClick={() => removeTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoPage;