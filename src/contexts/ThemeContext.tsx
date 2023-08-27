import { ReactNode, createContext, useContext, useState } from 'react';

import { dark, light } from '@/theme/palette';
import { Palette } from '@/theme/types';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggle: () => void;
  palette: Palette;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.classList.toggle('theme--light');
    document.documentElement.classList.toggle('theme--dark');
  };

  const palette = theme === 'dark' ? dark : light;

  return (
    <ThemeContext.Provider value={{ theme, toggle, palette }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
