import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(['Learn React', 'Build a project']);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div className="App">
      <h1>📝 Task Tracker</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>✅ {task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
