import { createContext } from 'react';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

const CreateTheme = <T extends object>(theme: T): T => {
  return theme;
};

export { ThemeContext, ThemeProvider, CreateTheme };
