import React from "react";
import AddressLine1 from "./AddressLine1";
import AddressLine2 from "./AddressLine2";
import AddressLine3 from "./AddressLine3";
import AddressLine4 from "./AddressLine4";
import { Container,Row } from "react-bootstrap";
const AddressMap=()=>{
    return(
        <>
        <Container className="p-5 mt-5">
        <h2>Our Office Address</h2>
        <hr />
        <Row>
        <div className="col-md-6">
        <AddressLine1 />
        </div>
        <div className="col-md-6">
        <AddressLine2 />
        </div>
        <div className="col-md-6 mt-4">
        <AddressLine3 />
        </div>
        <div className="col-md-6 mt-4">
        <AddressLine4 />
        </div>
        
        </Row>
        </Container>

        </>
    )
}
export default AddressMap