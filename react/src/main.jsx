// MAIN ENTRY POINT


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Imports main component
import App from './App.jsx'
import { useState } from 'react'

// Finds <div id="root"> in index.html
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
