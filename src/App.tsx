import React from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const App: React.FC = () => {
  return (
    <div className="app">
      <TaskForm />

      <main className="app-main">
        {/* section */}
        <TaskColumn title="To do" icon={todoIcon} altImg="Todo icon" />
        <TaskColumn title="Doing" icon={doingIcon} altImg="Doing icon" />
        <TaskColumn title="Done" icon={doneIcon} altImg="Done icon" />
      </main>
    </div>
  );
};

export default App;
