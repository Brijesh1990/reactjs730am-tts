import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    
       <Nav className='bg-dark p-4 navbar navbar-expand-md'>
        <Link to="" className='navbar-brand'>Employee Managements CRUD operations</Link>
        <ul>
        <li><Link to="">Add Employee <span className='bi bi-person'></span></Link> </li>
        <li><Link to="">Manage Employee <span className='bi bi-person'><span className='badge badge-sm bg-danger'>0</span></span></Link> </li>
        <li><Link to="">Delete Employee <span className='bi bi-trash'></span></Link> </li>
        <li><Link to="">Update Employee <span className='bi bi-person'></span></Link> </li>
        </ul>
       </Nav>
)
}
