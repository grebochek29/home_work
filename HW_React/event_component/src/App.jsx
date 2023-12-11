import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';
import EventComponent from './events';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = newTask => {
    setTasks([...tasks, { id: tasks.length + 1, title: newTask }]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm onAddTask={handleAddTask} />
        <div className='cont'>
          <EventComponent /> 
        </div>
    </div>
  );
};
//добавил ventComponent в контейнер для удобства, и из за косяков :)
export default App;