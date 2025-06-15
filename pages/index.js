import { useState } from 'react';

export default function Home() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task.trim()]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Todo List</h1>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        placeholder="Add a task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i} style={{ marginTop: '0.5rem' }}>
            {t}
            <button onClick={() => removeTodo(i)} style={{ marginLeft: '0.5rem' }}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
