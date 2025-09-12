import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
export const Header = () => {
  const theme = useContext(ThemeContext);
  const headerClass =
    theme === "dark"
      ? "bg-gray-800 text-white" // Dark theme classes
      : "bg-white text-gray-800"; // Light theme classes

  return (
    <header className={`p-4 shadow-md ${headerClass}`}>
      <h1 className="text-xl font-bold">Theme: {theme}</h1>
    </header>
  );
};
