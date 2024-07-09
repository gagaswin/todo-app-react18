import React, { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskData } from "./type";
import Header from "./components/Header";

// const oldTasks: string | null = localStorage.getItem("tasks");
const App: React.FC = () => {
  // const [tasks, setTasks] = useState<TaskData[]>(JSON.parse(oldTasks || "[]"));
  // lebih aman dari
  // const [tasks, setTasks] = useState<TaskData[]>(JSON.parse(oldTasks) || []);
  const [tasks, setTasks] = useState<TaskData[]>(() => {
    const oldTasks = localStorage.getItem("tasks");
    return oldTasks ? JSON.parse(oldTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<TaskForm setTasks={setTasks} />} />
          <Route
            path="/task"
            element={<TaskList tasks={tasks} setTasks={setTasks} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
