import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShowEmployee from './ShowEmployee'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowEmployee />
  </StrictMode>,
)
