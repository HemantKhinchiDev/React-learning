import { useState } from "react";
import { TodoItem } from "./TodoItem";
export const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const deleteTask = (index) => {
    setTaskList(
      taskList.filter((item, i) => {
        return i !== index;
      })
    );
  };

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
          <TodoItem
            key={index}
            item={item}
            index={index}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
};
