import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Employee from './components/Employee'
import './index.css'
import EmployeeData from './components/EmployeeData'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Employee /> */}
    <EmployeeData />
  </StrictMode>,
)
