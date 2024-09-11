import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes,  Route , Link } from 'react-router-dom'
import Inicio from './Inicio'
import VideoJuegos from './VideoJuegos'
import AcercaDe from './AcercaDe'
import Footer from './Footer'

function App() {
  return(
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <div className='collapse navbar-collapse' id='navbarSupoortedContent'>
            <ul className='navbar-nav mr-auto'>
              <Link to='/' className='nav-link'>Inicio</Link>
              <Link to='/acercade' className='nav-link'>Acerca de</Link>
              <Link to='/videojuegos' className='nav-link'>Videojuegos</Link>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Inicio />} />
          </Routes>
          <Routes>
          <Route path='/acercade' element={<AcercaDe />} />
          </Routes>
          <Routes>
          <Route path='/videojuegos' element={<VideoJuegos />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
