//3)
class person{
    constructor(firstname,lastname,age,address,)

{
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.address=address;
}
 displayinfo(){

    return this.firstname + " " +this.lastname + " is " + this.age + " years old and live in "+ this.address;
 }
}
const person1=new person("saurabh","mhaisdhune",24,"mumbai");
console.log(person1.displayinfo())
