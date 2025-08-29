import { useRef } from "react";

export const MyComponentA = () => {
  const countRef = useRef(0);
  return (
    <>
      <h1>Hemant</h1>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          countRef.current = countRef.current + 1;
          console.log(countRef.current);
        }}
      >
        Click Me & check count in console
      </button>
    </>
  );
};
