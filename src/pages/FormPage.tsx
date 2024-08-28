import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import { TaskData } from "../type";

const FormPage: React.FC = () => {
  const [tasks, setTasks] = useState<TaskData[]>(() => {
    const oldTasks = localStorage.getItem("tasks");
    return oldTasks ? JSON.parse(oldTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return <TaskForm setTasks={setTasks} />;
};

export default FormPage;
