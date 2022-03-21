import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import { Exdata } from './exampleData';
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState(Exdata);

  console.log(tasks);

  function addTask(title) {
    const newTask = {
      id: nanoid(),
      title: title,
      completed: false
    };
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  return (
    <div className="App">
      <h1 className='text-center'>TodoApps</h1>
      <p className='text-center'>Made By Deny Firdhaus</p>
      <hr />
      <Form addTask={addTask} />
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map(task => (
          <Todo
            id={task.id}
            title={task.title}
            completed={task.completed}
            key={task.id}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
