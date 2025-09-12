import { useState } from "react";
// import { ThemeContext } from "./ThemeProvider";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
