import { createContext, useContext, useEffect, useState } from 'react';
type TContext = {
  theme: string;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<TContext | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const localTheme = localStorage.getItem('theme');
  const currentTheme = localTheme ? localTheme : 'light';
  const [theme, setTheme] = useState(currentTheme);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): TContext => {
  return useContext(ThemeContext) as TContext;
};
