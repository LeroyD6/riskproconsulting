import React, { useState, useEffect, createContext, useContext } from "react";

// Create a context for theme management
const ThemeContext = createContext();

// Theme Provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Default theme is light

  useEffect(() => {
    // Always set light theme as default
    document.body.classList.remove("dark-mode");
    document.documentElement.classList.remove("dark-mode");
    document.documentElement.setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");
    setTheme("light");
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.body.classList.toggle("dark-mode", newTheme === "dark");
      document.documentElement.classList.toggle("dark-mode", newTheme === "dark");
      document.documentElement.setAttribute("data-bs-theme", newTheme);
      return newTheme;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Custom hook to use the theme context
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
