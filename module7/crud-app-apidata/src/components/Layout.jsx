import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import AddEmployee from './AddEmployee'
import Footer from './Footer'
export default function Layout() {
  return (
    <div>
     <Header />
     <Navbar />
     <AddEmployee />
     <Footer /> 
    </div>
  )
}
