/* 
whenever we access only one parent class properties access by its one child class i.e calledd single inheritance


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
constructor(dep,salary)
{
super(name,age,dep,salary);
this.dep=dep;
this.salary=salary;
}
}

var obj=new B("brijesh",35,"Information technology",89500);
console.log(obj);
