import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";
// import Todo from "../assets/direct-hit.png";

interface TaskColumnProps {
  title: string;
  icon: string;
  altImg: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, icon, altImg }) => {
  return (
    <section className="task-column">
      <h2 className="task-column-heading">
        <img className="task-column-icon" src={icon} alt={altImg} /> {title}
      </h2>

      <TaskCard />
    </section>
  );
};

export default TaskColumn;
