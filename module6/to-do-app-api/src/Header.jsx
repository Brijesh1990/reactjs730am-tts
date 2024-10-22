import React,{useEffect,useState} from 'react'
import { Container,Row } from 'react-bootstrap'
import axios from 'axios';
export default function Header() {
const[data,setData]=useState(0);
// display the task
useEffect(()=>{
    axios.get(`http://localhost:9000/tasks`).then((response)=>{
        setData(response.data);
    });
},[data]);
  return (
    <div>
      <Container fluid className='bg-danger text-white'>
        <Row>
            <div className='col-md-9'><h1 className='fs-4'>ToDo App</h1></div>
            <div className='col-md-3'>Total Task :<span className='bi bi-bell badge badge-white'>{data.length}</span></div>
        </Row>
      </Container>
    </div>
  )
}
