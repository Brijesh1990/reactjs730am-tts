import React,{useState,useEffect} from 'react'
import { Container,Row,Card } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import FlashMessage from 'react-flash-message'
export default function ManageEmployee() {
// applied useState and useEffects to manage data or Read data or fetch data
const[employee,setEmployee]=useState([]);
const[flash,setFlash]=useState(false);
const[updflash,setupdFlash]=useState(false);
const navigate=useNavigate();
// fetch data using useEffect using api  http://localhost:8000/add-employees
useEffect(()=>{

axios.get(`http://localhost:8000/add-employees`)
.then((response)=>{
setEmployee(response.data);
//response.json is get all data from db.json in json format
setFlash(true);
setupdFlash(true);

});


},[employee]);

return (    
<>
<Header />
<Navbar />
<Container>
<Row> 
<div className='col-md-12 mt-5 p-4'>
 {flash ? <><FlashMessage duration={4000} >
                        <div className='alert alert-danger'>
                           <strong>Employee deleted successfully</strong>
                        </div>
                      
                   </FlashMessage></> : <></> }


{updflash ? <><FlashMessage duration={4000} >
    <div className='alert alert-success'>
        <strong>Employee updated successfully</strong>
    </div>
  
</FlashMessage></> : <></> }
<Card>
<div className='card-header'>Manage Employee</div>
<table className='table table-responsive text-center mt-3' align='center'>

{/* fetch all employee data */}
{employee && employee.map((row)=>{
return (
<>
<tr align="center">
<td><img src={row.photo} className='img-fluid' style={{width:"95px",height:"95px"}} /></td>
<td>{row.name}</td>
<td>{row.email}</td>
<td>{row.company}</td>
<td>{row.department}</td>
<td>{row.designation}</td>
<td>{row.phone}</td>
<td>{row.address}</td>
<td><button type='button' onClick={()=>navigate(`/delete-employee/${row.id}`)} className='btn btn-sm btn-danger text-white bg-danger'><span className='bi bi-trash'></span></button> | <button type='button' onClick={()=>navigate(`/edit-employee/${row.id}`)} className='btn btn-sm text-white bg-primary'><span className='bi bi-pencil'></span></button></td>
</tr>

</>
)
})}
</table>  
</Card>

</div>
</Row>
</Container>
<Footer />
</>
)
}
