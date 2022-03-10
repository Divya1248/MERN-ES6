// class Car {
//     constructor(brand, color){
//         this.carname = brand;
//         this.carcolor = color;
//     }
//     getbrand(){
//         return "I have a " + this.carname;
//     }
//     getcolor(){
//         return "I have a " + this.carcolor;
//     }

// }
// var mycar = new Car("ford", "blue");
// console.log(mycar.carname);
// console.log(mycar.getbrand());
// console.log(mycar.getcolor());


//employee
class Employee {
    constructor(Eid, Ename, Esalary){
        this.id = Eid;
        this.name= Ename;
        this.salary =Esalary;
    }
    getEid(){
        return "employee id is " + this.id;

    }
    getEname(){
        return "employee name is "  + this.name;
    }
    getEsalary(){
        return "employee salary is " + this.salary;
    }
}
var myemployee = new Employee(3, "DIVYA", 45000);
console.log(myemployee.id);
console.log(myemployee.name);
console.log(myemployee.salary);
console.log(myemployee.getEname());
console.log(myemployee.getEsalary());
console.log(myemployee.getEid());