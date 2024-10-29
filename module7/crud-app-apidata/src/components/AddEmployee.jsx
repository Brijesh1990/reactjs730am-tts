import React, { useRef, useState } from 'react'
import { Container,Row,Card } from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function AddEmployee() {
    // add employee
    const[data,setData]=useState([]);
    const[flash,setFlash]=useState(false);
    // store all ref in variables 
    const name=useRef("");
    const email=useRef("");
    const id=useRef("");
    const company=useRef("");
    const department=useRef("");
    const designation=useRef("");
    const photo=useRef("");
    const phone=useRef("");
    const address=useRef("");
    const navigate=useNavigate();
    // create a formHandeling Function
    const AddEmployeeFormHandeling=(e)=>{
        e.preventDefault();
        // stored all data in object
        var insert={
            name:name.current.value,
            email:email.current.value,
            id:id.current.value,
            company:company.current.value,
            department:department.current.value,
            designation:designation.current.value,
            photo:photo.current.value,
            phone:phone.current.value,
            address:address.current.value

        }
        // call api via axios.post()   
        axios.post(`http://localhost:8000/add-employees`,insert).then(()=>{
            // pass success fully message
            setFlash(true);

        });
        navigate('/');
        e.target.reset();
    }

  return (
    <div>
      <Container>
        <Row>
            <div className='col-md-4 mt-5 p-4'>
             <h3 className='p-2 bg-dark text-white'>Employee Management</h3>
             <Sidebar />
            </div>
            <div className='col-md-8 mt-2 p-4'>
            <p className='text-center p-2'>
            {flash && (<FlashMessage duration={4000} >
                        <div className='alert alert-success'>
                           <strong>Employee added successfully</strong>
                        </div>
                      
                   </FlashMessage>
                   )}
                </p>

                <Card>
                    <div className='card-header fs-3 bg-dark text-white'>Add Employee</div>

                    <form onSubmit={AddEmployeeFormHandeling}>
                    <div className='card-body'>
                        <div className='from-group mt-2'>
                            <input type='text' ref={name} placeholder='Employee Name *' className='form-control' />
                        </div>
                        
                        <div className='from-group mt-2'>
                            <input type='text' ref={email} placeholder='Employee Email *' className='form-control' />
                        </div>
                        
                        <div className='from-group mt-2'>
                            <input type='text' ref={id} placeholder='Employee Id *' className='form-control' />
                        </div>
                        
                        <div className='from-group mt-2'>
                            <input type='text' ref={company} placeholder='Employee Company *' className='form-control' />
                        </div>

                        
                        <div className='from-group mt-2'>
                            <input type='text' ref={department} placeholder='Employee Department *' className='form-control' />
                        </div>

                        
                        <div className='from-group mt-2'>
                            <input type='text' ref={designation} placeholder='Employee designations *' className='form-control' />
                        </div>

                        
                        <div className='from-group mt-2'>
                            <input type='text' ref={photo} placeholder='Employee Photo *' className='form-control' />
                        </div>


                        <div className='from-group mt-2'>
                            <input type='text' ref={phone} placeholder='Employee Contact No. *' className='form-control' />
                        </div>

                        
                        <div className='from-group mt-2'>
                            <textarea ref={address} placeholder='Employee Address *' className='form-control'></textarea>
                        </div>

                        
                        <div className='from-group mt-2'>
                            <input type='submit' value="AddEmployee" className='btn btn-sm btn-dark bg-dark text-white' />
                        </div>
                    </div>
                    </form>
                </Card>
            </div>
        </Row>
      </Container>
    </div>
  )
}
