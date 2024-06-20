// clear when click on C button
function clr()
{
    document.getElementById("result").value="";
}
// when press on button its values get in result
function getResult(val)
{
    document.getElementById("result").value+=val;
}
// when press on backspace its clear or slice one-one values
function clrSlice()
{

    var bck=document.getElementById("result").value;
    var res=bck.slice(0,-1);
    document.getElementById("result").value=res;


}
// get all airthmatic result
function getFinalResult()
{
    // get final result eval() => all airthmatic operators evaluate here
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=+y;
}
// create a function for sqroot 
function sqrtResultrt()
{
 // math functions for calculate squreroot
 var number=parseInt(document.getElementById("result").value);
 var res=Math.sqrt(number);
 document.getElementById("result").value=res;
}
// create a function for sqare 
function sqrResult()
{
    // math functions for calculate squre
    var number=parseInt(document.getElementById("result").value);
    var res=Math.pow(number,2);
    document.getElementById("result").value=res;
}

