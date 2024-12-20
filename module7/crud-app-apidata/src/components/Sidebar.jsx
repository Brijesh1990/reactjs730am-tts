import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar() {
  return (
    <div>
       <ul className='sidebar'>
            <li><Link to="/">Add Employee <span className='bi bi-person'></span></Link> </li>
            <li><Link to="/manage-employee">Manage Employee <span className='bi bi-person'><span className='badge badge-sm bg-danger'>0</span></span></Link> </li>
            <li><Link to="/delete-employee">Delete Employee <span className='bi bi-trash'></span></Link> </li>
            <li><Link to="/update-employee">Update Employee <span className='bi bi-person'></span></Link> </li>
         </ul>   
    </div>
  )
}
