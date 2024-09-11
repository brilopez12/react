import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tabla from './Tabla'
import Menu from './NavBar'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Menu >
    </Menu>
    <Tabla/>
  </StrictMode>,
)
