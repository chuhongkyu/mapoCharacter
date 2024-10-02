import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { theme } from "./utils/theme";
import { StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
