import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
  
    const toggleTheme = () =>
      setTheme(t => (t === "light" ? "dark" : "light"));
  
    const value = { theme, toggleTheme };
  
    return (
      <ThemeContext.Provider value={value}>
        <div className={theme === "light" ? "theme-light" : "theme-dark"}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }