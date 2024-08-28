import React, { Dispatch, useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";
import { TaskData } from "../type";

interface TasksProps {
  setTasks: Dispatch<React.SetStateAction<TaskData[]>>;
}

const TaskForm: React.FC<TasksProps> = ({ setTasks }) => {
  const [taskData, setTaskData] = useState<TaskData>({
    task: "", // "task" sesuaikan dengan attribute name di input
    description: "", // "description" sesuaikan dengan attribute name di textarea
    status: "todo", // "status" sesuaikan dengan attribute name di select
    tags: [],
  });

  const checkTag = (tag: string) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTags = (tagName: string) => {
    if (taskData.tags.some((item) => item === tagName)) {
      const filterTags: string[] = taskData.tags.filter(
        (item) => item !== tagName
      );
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };

  const handleChange: React.ChangeEventHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      console.info(prev);
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit: React.FormEventHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.info("handleSubmit", taskData);

    setTasks((prev) => {
      return [...prev, taskData];
    });

    // reset data input afters submits
    setTaskData({
      task: "",
      description: "",
      status: "todo",
      tags: [],
    });
  };

  const listTags: string[] = ["HTML", "CSS", "JavaScript", "React", "Angular"];

  // const [task, setTask] = useState<string>("");
  // const [status, setStatus] = useState<string>("todo");

  // const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setStatus(e.target.value);
  // };

  // console.info(task, status);

  return (
    <div className="app-header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task-input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <textarea
          rows={5}
          name="description"
          value={taskData.description}
          placeholder="Description... "
          onChange={handleChange}
        ></textarea>
        <div className="task-form-bottom-line">
          <div>
            {listTags.map((tagName) => (
              <Tag
                key={tagName}
                tagName={tagName}
                selectTag={selectTags}
                selected={checkTag(tagName)}
              />
            ))}
          </div>

          <div className="flex">
            <select
              name="status"
              value={taskData.status}
              className="task-status"
              onChange={handleChange}
            >
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
    </div>
  );
};

export default TaskForm;
