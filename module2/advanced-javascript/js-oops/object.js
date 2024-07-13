/* 
object is an instance of class i.e called object
or
Object is an examples of class i.e called object

Note : any object or instance is called through new keyword


*/

class Address
{
    constructor(fnm,lnm,age,add)
    {
        this.fnm=fnm;
        this.lnm=lnm;
        this.age=age;
        this.add=add;

    }
}

let obj=new Address("brijesh","pandey",35,"150 feet ring road rajkot"); //new Address() is an object od class Address
console.log(obj);