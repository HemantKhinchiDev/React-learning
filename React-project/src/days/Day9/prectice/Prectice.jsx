import { useReducer, useState } from "react";

// 1. Initial State: Hamara shuruaati data.
const initialState = { todos: [] };

// 2. Reducer Function: Yeh batata hai ki state ko kaise badalna hai.
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(), // Ek unique ID ke liye
            text: action.payload,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// 3. Main Component: Jahan hum useReducer aur UI ko jodte hain.
export const Practice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: todoText });
    setTodoText(""); // Add hone ke baad input ko clear karein
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-4 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-gray-800">
          useReducer Todo App
        </h2>

        {/* Input aur Add Button */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            placeholder="Naya task likhein..."
            className="flex-grow p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
          >
            Add
          </button>
        </div>

        {/* Todo List Display */}
        <ul className="list-none space-y-2 text-left">
          {state.todos.map((todo) => (
            <li
              key={todo.id}
              className={`p-3 rounded-lg flex justify-between items-center transition-all duration-200 ${
                todo.completed ? "bg-green-200 line-through" : "bg-gray-200"
              }`}
            >
              <span className="flex-grow text-gray-800">{todo.text}</span>
              <div className="flex space-x-2">
                {/* Toggle Button */}
                <button
                  onClick={() =>
                    dispatch({
                      type: "TOGGLE_TODO",
                      payload: { id: todo.id },
                    })
                  }
                  className="p-1 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  ✅
                </button>
                {/* Delete Button */}
                <button
                  onClick={() =>
                    dispatch({
                      type: "DELETE_TODO",
                      payload: { id: todo.id },
                    })
                  }
                  className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
