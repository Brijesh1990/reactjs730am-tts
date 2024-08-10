import React from 'react'
import ReactDOM from 'react-dom/client'
import Nom from './App.jsx'
import './index.css'
import Mult from './MultApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nom />
    <Mult/>
  </React.StrictMode>,
)
