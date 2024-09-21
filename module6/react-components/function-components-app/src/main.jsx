import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Garage from './components/Car'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Garage />
  </StrictMode>,
)
