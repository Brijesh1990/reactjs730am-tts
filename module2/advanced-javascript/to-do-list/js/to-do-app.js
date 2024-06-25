
// create a function for enable btn
function enablBtn(btnId)
{
document.getElementById(btnId).disabled=false;
}
// add data via call back function
window.onload=()=>{
const form1=document.querySelector("#addForm");
let item=document.getElementById("item");
let items=document.getElementById("items");
let AddData=document.getElementById("Add_Data");

// call back function and used addEventListener   
form1.addEventListener("submit",additem);
//call back function for remove items 
form1.addEventListener("click",removeitem)
}

// add items function 
function additem(e)
{
// alert('i am clicked')
// redirect prevent method
e.preventDefault();
let newItem=document.getElementById("item").value;
if(newItem.trim()=="" || newItem.trim=='null')
{
Swal.fire({
title: "Something went wrong!",
text: "Please do not used blanks!",
icon: "error"
});   
 
}

else 
{
document.getElementById("item").value="";
let li=document.createElement("li");
li.className="list-group-item mt-2";
// stored data via createTextNode(newItem)
li.appendChild(document.createTextNode(newItem));

Swal.fire({
title: "Wow!",
text: "Items Addedd successfully!",
icon: "success"
});

// display in items
items.appendChild(li);
}
}
// remove items 
function removeitem()
{
// removed items here


}




