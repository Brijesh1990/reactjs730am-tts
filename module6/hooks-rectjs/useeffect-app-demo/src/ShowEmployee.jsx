import React,{useState,useEffect} from 'react'
import { Container,Row } from 'react-bootstrap'
import Data from './Data'
// useEffect : This is a type of hook
// useEffect is used to applied effects in our app
// useEffect is used to fetch data
// useEffect is used to pass dependency to applied effects in app while fetching data
// dependency in useEffect examples : [] blanks array | no dependency | pass props and state
// no dependency : render every time of data in api
// [] if pass blank array it render one times of data
// pass props and state : render one times but we can updated any data on run time
// useEffect(()=>{ statements; },dependency);
export default function ShowEmployee() {
//destructuring of data
const[data,setData]=useState([]);
//fetch all data using useEffect
useEffect(()=>{
    setData(data);
},[data]);

  return (
    <div>

    <Container className='p-5 mt-5'>
       <h2>Get all Data</h2>
       <hr />
        <Row>
            {Data && Data.map((item)=>{
                return(
                    <>
                  
                <div className='col-md-3 m-3 shadow'>
                 <p><b><img src={item.photo} alt='photo' className='img-fluid w-75' /></b></p>
                 <p><b>Id is : {item.id}</b></p>
                 <p><b>Id is : {item.name}</b></p>
                 <p><b>Id is : {item.age}</b></p>
                 <p><b>Id is : {item.address}</b></p>
                </div>
                
                    </>
                )
             
            })}  
            
        </Row>
    </Container>
      
    </div>
  )
}
