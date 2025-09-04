import { useState } from "react";

export const MirrorInput = () => {
  const [text, setText] = useState("");
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Mirror Input</h3>
      <div className="space-y-4">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Start typing..."
        />
        <p className="text-gray-700">
          <span className="font-semibold">Mirror Output:</span> {text}
        </p>
      </div>
    </div>
  );
};
