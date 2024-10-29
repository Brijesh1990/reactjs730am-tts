import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import axios from 'axios'
import FlashMessage from 'react-flash-message'
export default function DeleteEmployee() {
  // destructuring of data
  const[data,setData]=useState([]);
  const[flash,setFlash]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  // useEffect() for delete data
  useEffect(()=>{
    //call api to delete data axios.delete(``)
    axios.delete(`http://localhost:8000/add-employees/${id}`).then(()=>{
        // pass success fully message
        setFlash(true);
    });  
    navigate('/manage-employee');
  },[]);
  return (
    <div>
      
    </div>
  )
}
