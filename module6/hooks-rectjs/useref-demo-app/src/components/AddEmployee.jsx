import React, { useRef, useState } from "react";
// useRef:This is a type of hook
// this is used to stored user form input data i a variables
// this is also functional
// this is also called useRef();
// import Swal from 'sweetalert2';
import FlashMessage from "react-flash-message";
export default function AddEmployee() {
const [flash, setFlash] = useState(false);
//stored all user data in a variables
const firstname = useRef("");
const lastname = useRef("");
const email = useRef("");
//create a formHandeling function
const AddFormData = (e) => {
e.preventDefault();
var data = {
firstname: firstname.current.value,
lastname: lastname.current.value,
email: email.current.value,
};
// pass a message of form add
console.log("Form data addedd successfully", data);
// Swal.fire({
//     title: "Good job!",
//     text: "Your data successfully addedd!",
//     icon: "success"
//   });

setFlash(true);
e.target.reset();
};
return (
<div className="app container p-5">
{/* pass a flash messages */}
{flash && (
<FlashMessage duration={3000}>
<div className="alert alert-success">
<strong>Your form data successfully Added</strong>
</div>
</FlashMessage>
)}
<h1>Form</h1>
<form onSubmit={AddFormData}>
<label>FirstName *</label>
<input type="text" ref={firstname} placeholder="FirstName *" />
<br />
<br />
<label>LastName *</label>
<input type="text" ref={lastname} placeholder="LasName *" />
<br />
<br />
<label>Email *</label>
<input type="text" ref={email} placeholder="FirstName *" />
<br />
<br />
<input type="submit" value="submit" />
</form>
</div>
);
}
