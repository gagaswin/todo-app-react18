import React from "react";
import Tag from "./Tag";

import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

interface TaskCardProps {
  title: string;
  tags: string[];
  index: number;
  handleDelete: (taskIndex: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  tags,
  index,
  handleDelete,
}) => {
  return (
    <article className="task-card">
      <p className="task-text">{title}</p>

      <div className="task-card-bottom-line">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              tagName={tag}
              selectTag={() => {}}
              selected
              // selected={true}
            />
          ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img className="delete-icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
