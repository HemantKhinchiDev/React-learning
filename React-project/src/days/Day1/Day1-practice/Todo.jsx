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
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Create Your Todo</h3>
      <div className="flex space-x-2 mb-4">
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
          className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-2">
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
    </div>
  );
};
