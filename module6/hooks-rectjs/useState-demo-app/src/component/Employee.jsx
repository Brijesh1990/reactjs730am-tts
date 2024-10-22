import React,{useState} from 'react'
// useState : useState is a type of hook
//            This is used to stored object data in state
//            This is also used to update data of state object
//            This is also called immutable objects
//            This is used to destructured of data

export default function Employee() {
    const[data,setData]=useState("Brijesh kumar pandey");
  return (
    <div>

       <h1>Name of employees is :{data}</h1>
       <button type='button' onClick={()=>setData("Rakesh kumar pandey")}>Update the Name</button>
      
    </div>
  )
}
