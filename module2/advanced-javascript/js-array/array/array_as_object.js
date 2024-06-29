/* array as object or array as instance
 var emp=new Array();
*/

var i;
var emp=new Array(); //array as instance
emp[0]="Rakesh";
emp[1]="Nishant";
emp[2]="Milan";
emp[3]="Jayesh";
emp[4]="Brijesh";
emp[5]="Dhyanesh";

// console.log(emp);

for(i=0;i<emp.length;i++)
    {
        console.log(emp[i],"\n");
    }
