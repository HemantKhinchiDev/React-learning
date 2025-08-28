import { useEffect, useState } from "react";
export const PrecticeA = () => {
  // State to hold the current time.
  const [time, setTime] = useState(new Date());
  // State to hold the response from the Gemini API.
  const [geminiResponse, setGeminiResponse] = useState("");
  // State for loading indicator.
  const [isLoading, setIsLoading] = useState(false);

  // Set up the interval and cleanup function for the clock.
  useEffect(() => {
    // Set an interval to update the time every second.
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Return a cleanup function to clear the interval when the component unmounts.
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures this effect runs only once.

  // Helper function to format the time.
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  // Function to call the Gemini API and get a productivity tip or suggestion.
  const getGeminiSuggestion = async () => {
    setIsLoading(true);
    setGeminiResponse("");

    const now = new Date();
    const currentTimeString = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const prompt = `It is currently ${currentTimeString}. Provide a creative productivity tip or a suggestion for a relaxing activity for this time of day. Respond in Hindi.`;

    const payload = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    };

    const apiKey = "AIzaSyBWwDVANpSKgmOcOECun4SpVZCmE62vpZw";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const MAX_RETRIES = 3;
    let retries = 0;

    while (retries < MAX_RETRIES) {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          if (response.status === 429) {
            console.error("Rate limit exceeded. Retrying...");
            retries++;
            await new Promise((res) => setTimeout(res, 2 ** retries * 1000));
            continue;
          }
          throw new Error(`API error: ${response.statusText}`);
        }

        const result = await response.json();

        if (
          result.candidates &&
          result.candidates.length > 0 &&
          result.candidates[0].content &&
          result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0
        ) {
          const text = result.candidates[0].content.parts[0].text;
          setGeminiResponse(text);
        } else {
          setGeminiResponse(
            "कुछ सुझाव नहीं मिल पाया। कृपया दोबारा प्रयास करें।"
          );
        }
        break;
      } catch (error) {
        console.error("Error fetching Gemini response:", error);
        if (retries === MAX_RETRIES - 1) {
          setGeminiResponse("सुझाव प्राप्त करने में कोई त्रुटि हुई।");
        }
        retries++;
        await new Promise((res) => setTimeout(res, 2 ** retries * 1000));
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 font-inter">
      <div className="bg-gray-800 border-2 border-gray-700 rounded-3xl shadow-2xl p-8 sm:p-12 text-center transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-green-400">
          डिजिटल क्लॉक
        </h1>
        <p className="text-xl sm:text-2xl text-gray-400 font-medium mb-6">
          आपके लिए एक लाइव टाइमर
        </p>
        <div className="text-5xl sm:text-8xl md:text-9xl font-mono font-bold">
          {formattedTime}
        </div>

        {/* The new Gemini API feature section */}
        <div className="mt-8 flex flex-col items-center color-red">
          <button
            onClick={getGeminiSuggestion}
            disabled={isLoading}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
          >
            {isLoading ? "सोच रहा हूँ..." : "✨ सुझाव पाएँ"}
          </button>

          {geminiResponse && (
            <div className="mt-6 p-4 bg-gray-700 text-gray-200 rounded-2xl max-w-lg text-lg text-left">
              <h2 className="text-xl font-bold mb-2 text-green-300">
                आज का सुझाव:
              </h2>
              <p>{geminiResponse}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
