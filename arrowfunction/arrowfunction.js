// //longhand functions
// function sayhello(name){
//     console.log('hello',name);
// }
// sayhello(prompt('enter ur name'));

// //shorthand
// sayhello=(name)=>console.log('hello',name);
// sayhello(prompt('enter ur name'));

// //longhand
// setTimeout(function (){
//     console.log('loaded')
// },2000);

// //shorthand
// setTimeout(()=>  console.log('loaded'),2000);

// //longhand
// var list = ['social','science','maths','english'];
// list.forEach(function(item){
//     console.log(item);
// });

// //shorthand
// list.forEach(item => console.log(item));


// //arrow function with this
// function Bike() {
//     this.speed=0;
//     this.model = 2021;
//     this.speedUp = function (speed)
// {
//     this.speed = speed;
//     setTimeout(
//         () => {
//             console.log(this.speed);
//         },1000);
//     };
//     this.modelDetails = (model) => {
//         this.model = model;
//         setTimeout(() => console.log(this.model),200);
//     }
// }

// let bike = new.bike();
// this.speedUp(50);
// this.modelDetails(2022);

//Arrow function with this keyword:


// var person = {
// first: "Alex",
// actions: ["bike", "hike", "ski", "surf"],
// printActions: function() {
// var _this = this;
// this.actions.forEach(function(action) {
// var str = _this.first + " likes to " + action;
// console.log(str);
// });
// }
// };
// person.printActions();

// //ES-6
var person = {
first: "Alex",
actions: ["bike", "hike", "ski", "surf"],
printActions() {
this.actions.forEach(action => {
var str = this.first + " likes to " + action;
console.log(str);
});
}
};


// //Arrow Functions:

// An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, super, or new.target. 
// These function are best suited for non-method functions, and they cannot be used as constructors.

// Arrow functions in ES6 has two limitations:
// Don't work with new
// Fixed this bound to scope at initialisation



