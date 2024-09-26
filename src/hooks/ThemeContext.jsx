// hooks/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the ThemeContext
export const useThemeContext = () => {
  return useContext(ThemeContext);
};

// Provider component
export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false); // State to manage theme

  const toggleTheme = () => {
    setDark((prev) => !prev); // Toggle between light and dark themes
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
