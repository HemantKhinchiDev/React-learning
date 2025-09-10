import { useReducer } from "react";
import { Practice } from "./prectice/Prectice";
// 1. Initial State: हमारा starting point
const initialState = { count: 0 };

// 2. Reducer Function: यह बताता है कि state को कैसे बदलना है
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const Day9 = () => {
  // 3. useReducer Hook: यह state और dispatch function देता है
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center space-y-4 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-gray-800">useReducer Counter</h2>
        <p className="text-5xl font-extrabold text-blue-600 my-4">
          {state.count}
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => dispatch({ type: "increment" })}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: "decrement" })}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Decrement
          </button>
        </div>
      </div>

      <Practice />
    </div>
  );
};
