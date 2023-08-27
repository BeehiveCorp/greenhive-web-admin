'use client';

import { BiSun, BiSolidSun, BiMoon, BiSolidMoon } from 'react-icons/bi';

import { useTheme } from '@/contexts/ThemeContext';

import './styles.css';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggle, palette } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <div
      className={`theme-switcher ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggle}
      role="button"
    >
      <div className={`theme-switcher__circle ${isDarkMode ? 'dark' : 'light'}`} />

      {isDarkMode ? (
        <BiSun color={palette.title} size={16} />
      ) : (
        <BiSolidSun
          color={palette.background}
          size={16}
          style={{ position: 'relative' }}
        />
      )}

      {!isDarkMode ? (
        <BiMoon color={palette.title} size={16} />
      ) : (
        <BiSolidMoon
          color={palette.background}
          size={16}
          style={{ position: 'relative' }}
        />
      )}
    </div>
  );
};

export { ThemeSwitcher };
