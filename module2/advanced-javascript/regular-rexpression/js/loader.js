var myVar;
function MainFunction()
{
    myVar=setTimeout(LoaderLoad,"2000");

}

function LoaderLoad()
{

    document.getElementById("be-pro-loader").style="display:none";
    document.getElementById("main-page").style="display:block";

}