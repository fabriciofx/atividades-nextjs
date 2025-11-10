'use client';

import { useTheme } from '../theme/ThemeProvider';

export default function OlaMundo() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Olá, mundo!</h1>
      <button type="button" onClick={toggleTheme} className="border">
        Alternar Tema
      </button>
    </div>
  );
}
