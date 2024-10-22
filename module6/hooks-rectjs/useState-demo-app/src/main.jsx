import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Employee from './component/Employee'
// import Users from './component/Users'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Employee />
    {/* <Users /> */}
  </StrictMode>,
)
