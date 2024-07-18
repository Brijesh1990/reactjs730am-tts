/* 
method overriding : when we used same function pass with same arguments that is called method overriding


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
    constructor(name,age)
    {
        super(name,age);
       
    }
}
var obj=new B("milan",22);
console.log(obj);