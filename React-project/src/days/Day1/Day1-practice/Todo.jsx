import { useState } from "react";

export const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      Create Your Todo
      <br />
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && task.trim() !== "") {
            setTaskList([...taskList, task]);
            setTask("");
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (task.trim() !== "") {
            setTaskList([...taskList, task]);
            setTask("");
          }
        }}
      >
        Add Task
      </button>
      <ul>
        {taskList.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button
              onClick={() =>
                setTaskList(taskList.filter((_, i) => i !== index))
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
