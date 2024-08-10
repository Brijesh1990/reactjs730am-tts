import React from "react";
import { Container,Button } from "react-bootstrap";
const App=()=>{
    return(
        <>
       <Container className="w-50 mx-auto shadow p-5 bg-dark text-white mt-5">
       <h1 className="text-center">This is My Container App</h1>
       <Button type="button" className="btn btn-primary text-white ms-5 mt-5 w-50 mx-auto">Click Me</Button>
       </Container>
        
        </>
    )
}

export default App;