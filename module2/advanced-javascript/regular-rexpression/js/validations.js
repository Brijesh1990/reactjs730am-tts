function valid()
{
// validation on firstname

if(document.frm.fname.value=="")
{
alert('Please Input your firstname')
document.frm.fname.focus();
return false;
}

// applied regex for valid alphabetic character only accept with regex
var fnm=/^[a-zA-Z]+$/;
if(!fnm.test(document.frm.fname.value))
{
alert('Please enter your firstname as alphbetic character only')
document.frm.fname.focus();
return false;  
}

// validation on lastname
if(document.frm.lname.value=="")
{
alert('Please Input your lastname')
document.frm.lname.focus();
return false;
}

var lnm=/^[a-zA-Z]+$/;
if(!lnm.test(document.frm.lname.value))
{
alert('Please enter your laststname as alphbetic character only')
document.frm.lname.focus();
return false;  
}
// validation on email
var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!em.test(document.frm.email.value))
{
alert('Please Input your valid  Email Address')
document.frm.email.focus();
return false;
}   

// validation on phone
if(document.frm.phone.value=="")
{
alert('Please Input your Phone')
document.frm.phone.focus();
return false;
}

// regex for valid phone
var ph=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
if(!ph.test(document.frm.phone.value))
{
alert('Please enter your valid phone numbers')
document.frm.phone.focus();
return false;  
}
// validation on subject
if(document.frm.subject.value=="")
{
alert('Please Input your Subject')
document.frm.subject.focus();
return false;
}

// validation on message
if(document.frm.msg.value=="")
{
alert('Please Input your Messagee')
document.frm.msg.focus();
return false;
}
}