import React,{useState,useEffect,useRef} from 'react'
import { Container,Row,Card } from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import axios from 'axios'
import { Link, useNavigate,useParams } from 'react-router-dom'
import Sidebar from './Sidebar'
export default function UpdateEmployee() {
//destructuring for flash & update data   
const[data,setData]=useState([]); 
const[flash,setFlash]=useState(false);

// store all ref in variables 
const name=useRef("");
const email=useRef("");
const company=useRef("");
const department=useRef("");
const designation=useRef("");
const photo=useRef("");
const phone=useRef("");
const address=useRef("");
const navigate=useNavigate();
const{id}=useParams();

// create a function for edit data
useEffect(()=>{
// call api via axios
axios.get(`http://localhost:8000/add-employees/${id}`).then((response)=>{
setData(response.data);
//for edit all data
name.current.value=response.data.name;
email.current.value=response.data.email;
company.current.value=response.data.company;
department.current.value=response.data.department;
designation.current.value=response.data.designation;
photo.current.value=response.data.photo;
phone.current.value=response.data.phone;
address.current.value=response.data.address; 

});

},[]);  

//create a addEvent Handeler 
const updData=(e)=>{
e.preventDefault();
var upd={

name:name.current.value,
email:email.current.value,
company:company.current.value,
department:department.current.value,
designation:designation.current.value,
photo:photo.current.value,
phone:phone.current.value,
address:address.current.value
}
// call the api for update data
axios.put(`http://localhost:8000/add-employees/${id}`,upd).then(()=>{
// pass a message
setFlash(true);
navigate('/manage-employee');

})

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
<Card>
<div className='card-header fs-3 bg-dark text-white'>Edit Employee</div>

<form>
<div className='card-body'>
<div className='from-group mt-2'>
<input type='text' ref={name} placeholder='Employee Name *' className='form-control' />
</div>

<div className='from-group mt-2'>
<input type='text' ref={email} placeholder='Employee Email *' className='form-control' />
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
<button type='button' onClick={updData}  className='btn btn-sm btn-dark bg-dark text-white'>Update Employee</button>
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
