/**
 * WHY THIS FILE EXISTS
 * --------------------
 * Every React app needs one entry point. This file mounts <App /> into the HTML page.
 * If your vibe-coded site feels "magical," start here: find the equivalent of main.jsx
 * and see how your app actually boots.
 *
 * NEXT TO LEARN / CHANGE
 * - Add React Router when you need more than one page
 * - Wrap <App /> in a ThemeProvider once you want light/dark mode
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
