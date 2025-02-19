import React, { useState } from 'react';

function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task} <button onClick={onDelete}>Hapus</button>
    </li>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        type="text"
        placeholder="Tambahkan tugas"
        value={newTask}
        onChange={handleTaskChange}
      />
      <button onClick={addTask}>Tambah</button>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
