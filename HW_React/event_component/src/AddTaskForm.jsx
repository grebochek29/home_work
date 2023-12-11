import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = event => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    onAddTask(newTask);
    setNewTask('');
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTaskForm;