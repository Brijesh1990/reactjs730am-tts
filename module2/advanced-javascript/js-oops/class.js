/* 
what is class in javascript  ?

  A class is a group of member and its member functions i.e called class
  or
  A class is blueprint of object.
  or
  A class is nothing whenever we can not create its objects.

  syntax 

  class classname 
  {
   constructor()
   {
     statments;   
   
   }

  }
 create an object of class


*/


class Name
{
    constructor(nm)
    {

        this.nm=nm;

    }
}

var Obj=new Name("brijesh");
console.log(Obj);