import { useRef, useEffect, useState } from "react";

export const MyComponent = (prop) => {
  const [inputText, setInputText] = useState("");

  // 1. useRef Hook:
  // We create a ref to hold a reference to the input DOM element.
  // We initialize it with null.
  const inputRef = useRef(null);

  // 2. useEffect Hook:
  // This hook handles the side effect of focusing the input element.
  useEffect(() => {
    // Check if the current property of the ref exists and then call the focus() method on it.
    // This code runs only once when the component is mounted due to the empty dependency array.
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // The empty dependency array `[]` ensures this effect runs only once.

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 font-inter">
        <div className="bg-gray-800 border-2 border-gray-700 rounded-3xl shadow-2xl p-8 sm:p-12 text-center transform transition-transform duration-300 hover:scale-105 w-full max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-green-400">
            {prop.title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-medium mb-6">
            पेज लोड होने पर इनपुट बॉक्स पर ध्यान दें
          </p>

          <input
            // 3. Attach the ref:
            // We attach the ref to the input element using the 'ref' prop.
            // This allows us to access the input DOM node in the useEffect hook.
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type here..."
            className="w-full p-4 text-lg text-gray-900 bg-gray-200 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 shadow-inner"
          />

          <div className="mt-6 text-gray-400 text-left w-full">
            <p className="text-lg">
              आपकी टाइपिंग:{" "}
              <span className="font-bold text-green-400">{inputText}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
