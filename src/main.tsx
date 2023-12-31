import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import { ThemeProvider } from '@/contexts/ThemeContext.tsx';
import { UserProvider } from './contexts/UserContext.tsx';

import '@/theme/reset.css';
import '@/theme/palette.css';
import '@/theme/reusable.css';
import '@/theme/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
