export const TodoItem = ({ item, index, deleteTask }) => {
  return (
    <li>
      {item} <button onClick={() => deleteTask(index)}>❌</button>
    </li>
  );
};
