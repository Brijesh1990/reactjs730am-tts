/* 
whenever we access  one parent class properties access by its  child class i.e called multilevel  inheritance
A=>B=>C=>D=>E

*/ 

class HR 
{
  constructor(name,age)
  {
  
  this.name=name;
  this.age=age;
  
  }

}
class Employee extends HR
{
constructor(name,age,dep,salary)
{
super(name,age);
this.dep=dep;
this.salary=salary;
}
}

class Boss extends Employee
{
constructor(name,age,dep,salary,bossname,address)
{
super(name,age,dep,salary);
this.bossname=bossname;
this.address=address;
}
}

var obj=new Boss("brijesh",35,"Information technology",89500,"Mr, Niral Modi","Near SG highway Ahemdabad");
console.log(obj);
