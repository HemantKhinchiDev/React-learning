import { useState } from "react";
import { TodoItem } from "./TodoItem";
export const Todo = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([
    { text: "Task ka content", completed: false, edit: "" },
  ]);

  const deleteTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };
  const updateTaskText = (index, newText) => {
    setTaskList(
      taskList.map((t, i) => (i === index ? { ...t, text: newText } : t))
    );
  };
  const toggleComplete = (index) => {
    setTaskList(
      taskList.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
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
            setTaskList([
              ...taskList,
              { text: task, completed: false, edit: "" },
            ]);
            setTask("");
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          if (task.trim() !== "") {
            setTaskList([
              ...taskList,
              { text: task, completed: false, edit: "" },
            ]);
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
            toggleComplete={toggleComplete}
            updateTaskText={updateTaskText}
          />
        ))}
      </ul>
    </>
  );
};
