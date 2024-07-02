import React, { useEffect, useState } from "react";

import "./App.css";
import { TaskData } from "./type";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks: string | null = localStorage.getItem("tasks");
console.info(oldTasks);

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskData[]>(JSON.parse(oldTasks || "[]")); // lebih aman dari
  // const [tasks, setTasks] = useState<TaskData[]>(JSON.parse(oldTasks) || []);

  // console.info("task from App.tsx", tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex: number) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />

      <main className="app-main">
        <TaskColumn
          title="To do"
          icon={todoIcon}
          altImg="Todo icon"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Doing"
          icon={doingIcon}
          altImg="Doing icon"
          tasks={tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          title="Done"
          icon={doneIcon}
          altImg="Done icon"
          tasks={tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
