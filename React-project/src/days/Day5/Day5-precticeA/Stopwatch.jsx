import { useRef, useState } from "react";

// यहाँ से आपका Stopwatch कंपोनेंट शुरू होता है
export const Stopwatch = () => {
    const intervalRef = useRef(null);// यहाँ आपका useRef Hook आएगा

    const [time, setTime] = useState(0);// यहाँ आपके start Hooks आएंगे

  const startHandler =()=>{
    // `setInterval` हर 10 milliseconds में चलेगा
  // इसकी ID को `useRef` में स्टोर करें

  intervalRef.current = setInterval(()=> {
    setTime(prevTime=> prevTime + 10)
        },10)
  };
  const stopHandler =()=>{
      clearInterval(intervalRef.current)
  };
  const resetHandler =()=>{
    clearInterval(intervalRef.current)
    setTime(0);
  };// यहाँ आपके functions आएंगे, जैसे start, stop, reset

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-gray-800 text-white">
      <h1 className="text-4xl mb-5">Stopwatch App</h1>
      <p className="text-6xl my-5">{time}:00:00</p>
      <div className="flex space-x-4">
        <button onClick={startHandler} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Start
        </button>
        <button onClick={stopHandler} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Stop
        </button>
        <button onClick={resetHandler} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Reset
        </button>
      </div>
    </div>
  );
};
