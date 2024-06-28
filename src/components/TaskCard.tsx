import React from "react";
import Tag from "./Tag";

import deleteIcon from "../assets/delete.png";

const TaskCard: React.FC = () => {
  return (
    <article className="task-card">
      <p className="task-text">This is example task</p>

      <div className="task-card-bottom-line">
        <div className="task-card-tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
          <Tag tagName="JavaScript" />
          <Tag tagName="React" />
        </div>
        <div className="task-delete">
          <img className="delete-icon" src={deleteIcon} alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
