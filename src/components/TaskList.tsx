import React, { useEffect } from "react";
import TaskColumn from "./TaskColumn";
import todoIcon from "../assets/direct-hit.png";
import doingIcon from "../assets/glowing-star.png";
import doneIcon from "../assets/check-mark-button.png";
import { TaskData } from "../type";
import "./TaskList.css";

interface TaskListProps {
  tasks?: TaskData[];
  setTasks?: React.Dispatch<React.SetStateAction<TaskData[]>>;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks = [],
  setTasks = () => {},
}) => {
  const handleDelete = (taskIndex: number) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  console.info("task from TaskList.tsx", tasks);

  return (
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
  );
};

export default TaskList;
