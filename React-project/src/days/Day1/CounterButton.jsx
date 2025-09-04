import React from "react";
import { useState } from "react";

export const CounterButton = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Counter Button</h3>
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-700">
          <span className="font-semibold">Click count:</span>
          <span className="ml-2 font-mono text-lg">{count}</span>
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="flex-1 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Start Counter
        </button>
        <button
          onClick={() => setCount(0)}
          className="flex-1 bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};
