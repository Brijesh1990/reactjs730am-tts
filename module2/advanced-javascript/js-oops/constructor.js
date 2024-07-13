/* 

constructor is a simple member function
constructor is a same name of the class i.e called constructor
constructor is same name of class whenever we called object of class constructor automatically called.

*/

class Animal 
{
    //constructor is same name of class whenever we called object of class constructor automatically called.
    constructor(name,petname)
    {
        this.name=name;
        this.petname=petname;
    }
}

var obj=new Animal("tiger","ek tha tiger");
console.log(obj);