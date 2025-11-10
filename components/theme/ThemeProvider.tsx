'use client';

import { createContext, type ReactNode, useContext, useState } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const DEFAULT_THEME_CONTEXT: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {
    console.error('toggleTheme foi chamado fora do ThemeProvider');
  }
};
const ThemeContext = createContext<ThemeContextType>(DEFAULT_THEME_CONTEXT);
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
