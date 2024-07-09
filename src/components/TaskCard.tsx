import React from "react";
import Tag from "./Tag";

import "./TaskCard.css";
import deleteIcon from "../assets/delete.png";

interface TaskCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
  handleDelete: (taskIndex: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  description,
  tags,
  index,
  handleDelete,
}) => {
  const maxtLength: number = 120;
  let truncatedDescription: string =
    description.length > maxtLength
      ? `${description.substring(0, maxtLength)}...`
      : description;

  console.info("truncatedDescription: ", truncatedDescription);

  return (
    <article className="task-card">
      <div className="task-text">
        <p className="title">{title}</p>
        <small className="description">{truncatedDescription}</small>
      </div>

      <div className="task-card-bottom-line">
        <div className="task-card-tags">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              tagName={tag}
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
