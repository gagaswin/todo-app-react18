import React from "react";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import { TaskData } from "../type";
// import Todo from "../assets/direct-hit.png";

interface TaskColumnProps {
  tasks: TaskData[];
  status: string;
  title: string;
  handleDelete: (taskIndex: number) => void;
  icon: string;
  altImg: string;
}

const TaskColumn: React.FC<TaskColumnProps> = ({
  tasks,
  status,
  title,
  handleDelete,
  icon,
  altImg,
}) => {
  return (
    <section className="task-column">
      <div className="task-column-heading">
        <img className="task-column-icon" src={icon} alt={altImg} />
        <h2>{title}</h2>
      </div>

      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              index={index}
              handleDelete={handleDelete}
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;
