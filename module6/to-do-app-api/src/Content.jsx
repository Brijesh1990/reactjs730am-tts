import React,{useState,useRef, useEffect} from 'react'
import axios from 'axios';
import { Container } from 'react-bootstrap'
import FlashMessage from 'react-flash-message'
import { useNavigate } from 'react-router-dom';
export default function Content() {
const[data,setData]=useState([]);
// display the task
useEffect(()=>{
    axios.get(`http://localhost:9000/tasks`).then((response)=>{
        setData(response.data);
    });
},[data]);
// flash message destructure
const[flash,setFlash]=useState(false);
//add task via form 
const taskname=useRef("");
const added_date=useRef("");
const priority=useRef("");
const navigate=useNavigate();
// add task via axios.post() 
const AddTask=(e)=>{
     e.preventDefault();
     var insert={
        taskname:taskname.current.value,
        added_date:added_date.current.value,
        priority:priority.current.value
     }
    //add data in api 
    axios.post(`http://localhost:9000/tasks`,insert).then(()=>{
        // pass flash data messages
        setFlash(true);
    });

    navigate('/');

    e.target.reset();

}


return (
<div>
<Container className='mt-4 w-50 mx-auto'>
{/* add task */}
<h1 className='fs-4'>Add Task here</h1>
{flash && (<FlashMessage duration={4000}>
    <div className='alert alert-success'>
        <strong>Your task added successfully</strong>
    </div>
</FlashMessage>
)}

<form onSubmit={AddTask}>
<div className='input-group mb-3'>
<span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
<input type="text" ref={taskname} className="form-control" placeholder="TaskName *" />
</div>

<div className='input-group mb-3'>
<span className="input-group-text bi bi-calendar" id="basic-addon1"></span>
<input type="date" ref={added_date} className="form-control" placeholder="TaskName *" />
</div>
<div className='input-group mb-3'>
<span className="input-group-text bi bi-pencil" id="basic-addon1"></span>
<select ref={priority} className="form-control" placeholder="TaskName *">
<option value="">-select priority-</option>
<option value="higher">Higher</option>
<option value="low">Low</option>
</select>
</div>
<div className='input-group mb-3'>
<input type="submit" className="btn btn-dark text-white" value="AddTask" />
</div>
</form>
{/* display task */}

<table className='table table-responsive mt-5 border table-bordered fs-6' cellPadding="8" cellSpacing="8">
    {data && data.map((item)=>{
        return( 
            <>
             <tr>
                <td>{item.taskname}</td>
                <td>{item.added_date}</td>
                <td>{item.priority}</td>
                <td colSpan={2}>
                <div style={{minWidth:"120px"}}><button className='btn btn-sm bg-danger text-white'><span className='bi bi-trash'></span></button> | <button className='ms-2 btn btn-sm bg-primary text-white'><span className='bi bi-pencil'></span></button> </div></td>
                <td></td>
             </tr>   
            </>
    )}
    )}
   
</table>
</Container>
</div>
)
}
