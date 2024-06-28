import React from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm: React.FC = () => {
  return (
    <header className="app-header">
      <form>
        <input
          type="text"
          className="task-input"
          placeholder="Enter your task"
        />
        <div className="task-form-bottom-line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select className="task-status">
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button type="submit" className="task-submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
