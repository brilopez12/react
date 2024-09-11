import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tabla from './Tabla'
import Menu from './NavBar'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
