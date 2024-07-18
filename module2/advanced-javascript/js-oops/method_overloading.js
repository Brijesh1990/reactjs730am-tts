/* 
method overloading : when we used same function pass with different arguments that is called method overloading


*/

class A 
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}

class B extends A 
{
    constructor(name,age,salary,address)
    {
        super(name,age);
        this.salary=salary;
        this.address=address;
    }
}
var obj=new B("milan",22,38500,"150 feet ring road rajkot");
console.log(obj);