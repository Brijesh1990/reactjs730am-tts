import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'animate.css'
import './assets/css/style.css'
// user panel components import here
import Layout from './Layout'
import Contact from './components/user/ContactUs'
import Register from './components/user/RegisterUs'
import FoodMenu from './components/user/FoodMenu'
import NotFound from './components/user/NotFound'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/create-account' element={<Register />} />
        <Route path='/food-menu' element={<FoodMenu />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  </StrictMode>,
)
