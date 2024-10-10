import React,{useRef} from "react";
import { Container,Row,Form} from "react-bootstrap";
import Swal from "sweetalert2";
function Appointment()
{
 //stored all ref attributes values in variables 
 const patientname=useRef("");
 const patientage=useRef("");
 const phone=useRef("");
 const address=useRef("");
 const doctorname=useRef("");
 const datetime=useRef("");

//create a formHandeling function 

const BookAppointmentData=(e)=>{
    e.preventDefault();
    var addData={
        patientname:patientname.current.value,
        patientage:patientage.current.value,
        phone:phone.current.value,
        address:address.current.value,
        doctorname:doctorname.current.value,
        datetime:datetime.current.value,

    }

    // pass a message
    console.log('Your appointment booked successfully',addData);
    Swal.fire({
        title: "Good job!",
        text: "Your Appointment Booked successfully!",
        icon: "success"
      });

      e.target.reset();

}
 

    return (
        <>
        <Container className="mt-5 p-5">
            <h1>Book your appointment with us</h1>
            <hr />
            <Row>
                <div className="col-md-4">
                    <img src="https://cdn.dribbble.com/users/1894420/screenshots/13451478/appointment-booking-with-smartphone.gif" className="img-fluid"/>
                </div>
                <div className="col-md-8">
                    <Form onSubmit={BookAppointmentData}>
                        <div className="form-group mt-2">
                            <input type="text" ref={patientname} placeholder="Enter Patient Name *" className="form-control" />
                        </div>

                        
                        <div className="form-group mt-2">
                            <input type="text" ref={patientage} placeholder="Enter Patient Age *" className="form-control" />
                        </div>

                        
                        <div className="form-group mt-2">
                            <input type="text" ref={phone} placeholder="Enter Phone *" className="form-control" />

                        </div>
                        
                        <div className="form-group mt-2">
                            <textarea  ref={address} placeholder="Enter Patient Address *" className="form-control"></textarea>
                        </div>


                        
                        <div className="form-group mt-2">
                            <input type="text" ref={doctorname} placeholder="Enter DoctorName *" className="form-control" />
                        </div>

                        <div className="form-group mt-2">
                            <input type="datetime-local" ref={datetime} placeholder="select date &n Time *" className="form-control" />
                        </div>


                        <div className="form-group mt-2">
                            <input type="submit" value="Book Appointment" placeholder="Enter Patient Name *" className="btn btn-lg btn-dark text-white" />
                        </div>
                    </Form>
                </div>
            </Row>
        </Container>

        </>
    )
}

export default Appointment