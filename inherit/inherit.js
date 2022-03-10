// class Vehicle {
//     constructor(name,type){
//         this.name=name;
//         this.type=type;
//     }
//     getName(){
//         return this.name;
//     }
//     getType(){
//         return this.type;
//     }
// }

// //child class
// class Car extends Vehicle {
//     constructor(name){
//         super(name, "premium car");
//     }

//     getName() {
//         return "it is a car " + super.getName();
//     }
// } 
// let car = new Car("benz");
// console.log(car.getName()); // It is a car benz
// console.log(car.getType()); // premium car


//ex2

class Animal { 
    constructor(legs)
     { this.legs = legs; } 

walk() { 
    console.log('birds have ' + this.legs + ' legs'); 
} 
}

class Bird extends Animal { 
    constructor(legs) { 
        super(legs); 
    } 
fly() {
     console.log(' birds can flying'); 
    } 
} 
let bird = new Bird(2);
 bird.walk();
 bird.fly();