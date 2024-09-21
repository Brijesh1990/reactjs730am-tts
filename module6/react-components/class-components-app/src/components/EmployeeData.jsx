import React,{Component} from 'react'
class EmployeeData extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            "id":1,
            "name":"brijesh",
            "age":35,
            "salary":115000
        }
    }

    render()
    {
        return(
            <>
                <h1>The employee name is :{this.state.name}</h1>
                <h1>The employee age is :{this.state.age}</h1>
                <h1>The employee salary is :{this.state.salary}</h1>
            </>
        )
    }
}

export default EmployeeData