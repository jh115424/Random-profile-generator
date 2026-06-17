import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ProfileCard from './Components/ProfileCard.jsx'
import ProfileWall from './Components/ProfileWall.jsx'
import NavBar from './Components/NavBar.jsx'
import About from './Components/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProfileCard />} />
        <Route path="/wall" element={<ProfileWall />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)