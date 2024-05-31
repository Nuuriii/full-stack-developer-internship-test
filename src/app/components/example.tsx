'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const Example: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    axios.get('/api/todo').then((response) => setTasks(response.data));
  }, []);

  const addTask = async () => {
    if (newTask) {
      const response = await axios.post('/api/todo', { title: newTask });
      setTasks([...tasks, response.data]);
      setNewTask('');
    }
  };

  const updateTask = async (id: number, completed: boolean) => {
    const response = await axios.put(`/api/todo/${id}`, { completed });
    setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
  };

  const deleteTask = async (id: number) => {
    await axios.delete(`/api/todo/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task.id, !task.completed)}
            />
            {task.title}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
