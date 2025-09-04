export const TodoItem = ({
  item,
  index,
  deleteTask,
  toggleComplete,
  updateTaskText,
}) => {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleComplete(index)}
          className="form-checkbox h-5 w-5 text-blue-600 rounded-md cursor-pointer"
        />
        <span
          className={`ml-3 text-lg font-medium ${
            item.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {item.text}
        </span>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={() => deleteTask(index)}
          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
        >
          ❌
        </button>

        <button
          onClick={() => {
            const newText = prompt("Enter new text:", item.text);
            if (newText) updateTaskText(index, newText);
          }}
          className="p-2 text-gray-500 hover:text-yellow-500 transition-colors"
        >
          ✏️
        </button>
      </div>
    </li>
  );
};
