import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const theme = JSON.parse(localStorage.getItem("currentTheme")) || "light";

  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    localStorage.setItem(
      "currentTheme",
      JSON.stringify(currentTheme) || "light"
    );
  }, [currentTheme]);

  const changeTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  };

  const setDark = (itemName) => {
    return currentTheme === "dark"
      ? `${itemName} ${itemName}--dark`
      : `${itemName}`;
  };

  return (
    <ThemeContext.Provider
      value={{ changeTheme, darkTheme: currentTheme, setDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
