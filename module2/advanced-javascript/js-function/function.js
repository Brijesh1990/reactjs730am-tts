/*
A function is a block of code  that can be used to completed any task i.e called functions

syntax : function functionaname()
         {
           statements;
        
        }
        function call();



types of function 

   a) normal function
        types of normal function 
        1) user defined function 
        2) pre defined function

        how to call a normal function 
        1) call by value
        2) call by reference
   b) arrow function
        This function is used in ES5.0 and ES6.0 version of javascript
         
        const name=()=>{
            
            statements;
            
            }


*/




// function test()
// {
//     var name="My name is Brijesh";
//     // document.write(name);
//     console.log(name);
// }

// test();


//function should be return

// function test()
// {
//     var name="My name is Brijesh";
//     // document.write(name);
//     return name;
// }

// console.log(test());


//pass an argument or parameter

//this function used as call by value
// function test(a,b)
// {
//     var a;
//     var b;
//     var c=a+b;
//     return c;
// }

// console.log(test(10,20));

//call by reference
// function test(fnm)
// {
//     var firstname=fnm;
//     return firstname;
// }

// console.log(test("Brijesh"));


//user defined function 

// function Display(address)
// {
//   var ad=address;
//   return ad;
// }
// console.log(Display("My address is :150 feet ring road rajkot"));

//pre defined function

var number=145454544n;
console.log(typeof(number));