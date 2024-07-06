// enable & disables button
function enbBtn(btnId)
{
    // alert('hi')
    document.getElementById(btnId).disabled=false;   
}
// window load functions applied 
window.onload=()=>
{
    // alert('hi i am just load a windows')
    let addForm=document.querySelector("#addForm");
    let item=document.getElementById("item").value;
    let items=document.getElementById("items");
    // add item via user input create a eventListener
    addForm.addEventListener("submit",addItem); 
    // remove items via users create a event listeners
    items.addEventListener("click",removeItem);
}

// add item callback function 
function addItem(e)
{
   e.preventDefault(); //prevent redirection after submit on button
   let newItem=document.getElementById("item").value;
   //trim whitespace from start & end
   if(newItem.trim()=="" || newItem.trim()=='null')  
    {
        Swal.fire({
            title: "Something went wrong",
            text: "Please do not left blank please input something to Add Items",
            icon: "error"
          });
    }
    else 
    {
     //add items here
     let newItem=document.getElementById("item").value;
     let li=document.createElement("li");
     li.className="list-group-item m-0 mt-2 w-100";
     // store data via createTextNode() and append
     li.appendChild(document.createTextNode(newItem));
     Swal.fire({
        title: "Wow",
        text: "Data addedd successfully",
        icon: "success"
      });
      console.log(newItem);

    //display data in items
    items.appendChild(li);

    // reset all data 
    e.target.reset();

    // add delete button & edit button via document.createElement

    // delete button
    let delBtn=document.createElement("button");
    delBtn.className="btn btn-sm btn-danger bg-danger text-white float-end ms-2 delete";
    delBtn.appendChild(document.createTextNode("Delete"));
    // edit buttom
    let editBtn=document.createElement("button");
    editBtn.className="btn btn-sm btn-primary bg-primary text-white float-end m-0 edit";
    editBtn.appendChild(document.createTextNode("Edit"));
   

    // delete button add in items 
     li.appendChild(delBtn);
    // edit button add in items
    li.appendChild(editBtn);  

    }  

}

// removed items callback function
function removeItem(e)
{
    e.preventDefault();
    

}
