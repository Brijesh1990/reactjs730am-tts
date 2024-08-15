import React from "react";
import { Container,Row } from "react-bootstrap";
const App=()=>{
    return (
        <>
        <Container className="w-50 mx-auto shadow mt-5 p-5">
            <Row>
                <div className="col-md-4">
                    <img src='https://lh4.googleusercontent.com/proxy/pONrw1m5Xiw12P_9NYPAFwWJLzCwTMzVHSp74dz7LMmio2Q4rvaoZRz5T4HpfheGn8gVQEpIag' className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <button type="button" className="w-75 ms-5 mt-5 btn btn-lg btn-dark text-white" data-bs-toggle="modal" data-bs-target="#sign">Sign In Here <span className="bi bi-person"></span></button>
                </div>
            </Row>

           {/* modal here */}
           <div className="modal fade" id="sign" role="dialog">
            <div className="modal-dialog" style={{minWidth:"5   0%"}}>
                <div className="modal-content p-5 mt-5">
                     <Row>
                        <div className="col-md-5">
                            <img src="https://forum.zeroqode.com/uploads/default/original/1X/d6165fab438f6f58263c2376bc754f0b51676887.gif" className="img-fluid" />
                        </div>
                        <div className="col-md-7">
                        <h3 className="text-center">Sign In here</h3>
                    <hr />
                    <div className="form-group mt-3">
                        <input type="text" placeholder="Email .." className="form-control" />
                    </div>
                    
                    <div className="form-group mt-3">
                        <input type="text" placeholder="Email .." className="form-control" />
                    </div>

                    
                    <div className="form-group mt-3">
                        <input type="submit" value="Login"  className="btn btn-dark text-white btn-sm" />
                    </div>
                        </div>
                     </Row>
                
                </div>
            </div>
           </div>



        </Container>
        
        </>
    )
}
export default App 