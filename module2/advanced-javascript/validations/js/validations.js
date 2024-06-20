function valid()
{
// validation on firstname
if(document.frm.fname.value=="")
{
alert('Please Input your firstname')
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

    // validation on email
if(document.frm.email.value=="")
    {
        alert('Please Input your Email')
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