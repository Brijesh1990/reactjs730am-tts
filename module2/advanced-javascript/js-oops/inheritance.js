/* 

inheritance : inheritance is used to access one class properties with another class i.e called inheritance
               or
               inheritance is used to access one class properties within another class i.e called inheritance
               
               A =>B

types of inheritance 

              a) single inheritance
              b) multilevel inheritance
              c) multiple inheritance
              
                

              Note :inheritance is used to using extends keywords 
              
              
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
super(nm,age); // parent class properties access by its child class then used super();
this.dep=dep;
this.salary=salary;
}
}

var obj=new B("brijesh",35,"Information technology",89500);
console.log(obj);