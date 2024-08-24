import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Nav from './Navbar'
import Anim from './Animations'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Nav />
    <Anim />
  </StrictMode>,
)
