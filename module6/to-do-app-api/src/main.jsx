import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Layout from './Layout'
import PageNotFound from './PageNotFound'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/css/style.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
     <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
    </Router>
  </StrictMode>,
)
