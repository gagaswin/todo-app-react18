import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <header>
      <h2>Wellcome to my todo app</h2>

      <div className="btn-navigation">
        <button onClick={() => navigate("/")}>Set Task</button>
        <button onClick={() => navigate("/task")}>Tasks</button>
      </div>
    </header>
  );
};

export default Header;
