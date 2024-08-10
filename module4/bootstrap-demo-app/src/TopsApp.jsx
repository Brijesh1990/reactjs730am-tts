import React from "react";
import {Container,Card,Button,Form} from 'react-bootstrap'
import logo from './assets/images/tops-logo.png'
const Tops=()=>{
    return(
      <>
        {/* header */}
        <div className="tops-header p-2">
          <p className="text-center"><img src={logo} alt="photo" className="img-fluid" /></p>
        </div>

        {/* login */}
        <Card className="border border-2 border-primary tops-login mx-auto p-5 mt-5">
        <h1 className="text-center fs-3">TOPS <br /> <span className="text-primary">Career  Center Login</span></h1>
        <Form>
            <div className="form-group mt-2">
            <input type="text" placeholder="Mobile .." className="form-control" />
            </div>

            <div className="form-group mt-2">
            <input type="text" placeholder="Password .." className="form-control" />
            </div>

            <div className="form-group mt-4">
            <Button type="submit" placeholder="Mobile .." className="form-control">SignIn</Button>
            </div>
        </Form>
        
        </Card>

      </>
    )
    
}
export default Tops