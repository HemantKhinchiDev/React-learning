import { useEffect, useState } from "react";
export const PrecticeA = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      //console.log(e);
      setTime(now);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const formattedTime = time.toLocaleTimeString();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <div className="bg-gray-800 border-2 border-gray-700 rounded-3xl shadow-2xl p-8 sm:p-12 text-center transform transition-transform duration-300 hover:scale-105">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
            डिजिटल क्लॉक
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 font-medium mb-6">
            आपके लिए एक लाइव टाइमर
          </p>
          <div className="text-5xl sm:text-8xl md:text-9xl font-mono font-bold text-green-400">
            {formattedTime}
          </div>
        </div>
      </div>
    </>
  );
};
