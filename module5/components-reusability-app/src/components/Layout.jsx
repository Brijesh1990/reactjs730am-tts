import React from "react";
import { Container,Row } from "react-bootstrap";
import { AddressLine1,AddressLine2,AddressLine3,AddressLine4 } from "./MapAddressApp";
const Layout=()=>{
    return(
        <>
        <Container className="mt-5 p-5">
            <h1>Our Officess Address</h1>
            <hr />
            <Row>
                <div className="col-md-6">
                    <AddressLine1 />
                </div>
                <div className="col-md-6">
                    <AddressLine2 />
                </div>
                <div className="col-md-6">
                    <AddressLine3 />
                </div>
                <div className="col-md-6">
                    <AddressLine4 />
                </div>
            </Row>
        </Container>

        </>
    )
}
export default Layout