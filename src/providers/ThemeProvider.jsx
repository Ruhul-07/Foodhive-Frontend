import { Children, createContext, useEffect, useState } from "react";

export const ThemeContext= createContext();
const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
          setIsDark(savedTheme === 'dark');
        }
      }, []);

      const toggleTheme = () => {
        setIsDark((prevTheme) => {
          const newTheme = !prevTheme;
          localStorage.setItem('theme', newTheme ? 'dark' : 'light');
          return newTheme;
        });
      };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;