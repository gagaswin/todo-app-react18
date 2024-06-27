import React from "react";

import "./App.css";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app-main">
        <section className="task-column">Section 1</section>
        <section className="task-column">Section 2</section>
        <section className="task-column">Section 3</section>
      </main>
    </div>
  );
};

export default App;
