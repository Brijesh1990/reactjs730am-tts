import React,{useState,Component} from 'react'
// class based components is no more supported hooks
class Users extends Component
{
    render()
    {
        const[name,setName]=useState("Brijesh kumar pandey");
        return(
            <>
               <h1>The name of users is : {this.state.name}</h1>
            </>
        )
    }
}
export default Users