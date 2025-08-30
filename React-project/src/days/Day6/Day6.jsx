import React, { useState, useEffect } from "react";
import axios from "axios";
// Tailwind CSS ko import karne ki zaroorat nahi hai,
// kyunki wo build process mein hi generate ho jaati hai.
// Bas aapko apne main CSS file mein Tailwind directives add karne honge.

export const Day6 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=f0c1a3e1ac1f4db486b114908253008&q=London"
        );

        setWeatherData(response.data);
      } catch (err) {
        setError(err.response?.data?.error?.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  // Conditional Rendering
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
          <p className="text-xl font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
          <p className="text-xl font-medium text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (weatherData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {weatherData.location.name}, {weatherData.location.country}
          </h2>
          <p className="text-5xl font-extrabold text-blue-600 my-4">
            {weatherData.current.temp_c}°C
          </p>
          <img
            src={weatherData.current.condition.icon}
            alt="Weather icon"
            className="w-24 h-24 mx-auto"
          />
          <p className="text-lg text-gray-600 font-medium">
            {weatherData.current.condition.text}
          </p>
          <div className="mt-6 pt-4 border-t border-gray-200 text-gray-600 text-sm">
            <p className="my-1">Humidity: {weatherData.current.humidity}%</p>
            <p className="my-1">Wind: {weatherData.current.wind_kph} km/h</p>
          </div>
        </div>
      </div>
    );
  }

  return null; // Initial state jab koi data na ho
};
