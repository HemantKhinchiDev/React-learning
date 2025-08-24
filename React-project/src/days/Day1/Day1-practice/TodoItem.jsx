export const TodoItem = ({
  item,
  index,
  deleteTask,
  toggleComplete,
  updateTaskText,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(index)}
      />
      {item.completed ? <s>{item.text}</s> : item.text}

      <button onClick={() => deleteTask(index)}>❌</button>

      <button
        onClick={() => {
          const newText = prompt("Enter new text:", item.text);
          if (newText) updateTaskText(index, newText);
        }}
      >
        ✏️
      </button>
    </li>
  );
};
