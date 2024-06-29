/* 
object as constructor : declared with new Object() this is called object as constructor

object as constructor is always called using function and stored each values of object using its current values stored used this keyword



*/

function employee(id,name,age,salary)
{

    this.id=1001,
    this.name="brijesh",
    this.age=35,
    this.salary=89500
}

var Obj=new employee();
// console.log(Obj);
console.log(typeof(Obj));
