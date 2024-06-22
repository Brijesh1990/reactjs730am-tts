// login as email and password
function lg()
{
var em=document.getElementById("email").value;
var pwd=document.getElementById("pwd").value;
if(em=='bkpandey@gmail.com' && pwd=='brij$$123')
{

    Swal.fire({
        title: "Congratulations!",
        text: "You are Logged In successfully",
        icon: "success"
      });

      window.location='dashboard.html';
}
else 
{
    Swal.fire({
        title: "Oh! sorry",
        text: "Your email and password are Incorrect try again",
        icon: "error"
      });
      window.location='/';
}

}