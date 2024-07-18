/* 
whenever we access only one parent class properties access by its one child class i.e calledd single inheritance


*/ 

class A 
{
  constructor(nm,age)
  {
  
  this.nm=nm;
  this.age=age;
  
  }

}
class B extends A
{
constructor(nm,age,dep,salary)
{
super(nm,age);
this.dep=dep;
this.salary=salary;
}
}

var obj=new B("brijesh",35,"Information technology",89500);
console.log(obj);
