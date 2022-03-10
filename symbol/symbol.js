//ex 1 
const mySymbol = Symbol();
console.log(typeof mySymbol);

//ex2
const x1 = Symbol("javascript");
const x2 = Symbol("javascript");

console.log("equals to", x1==x2); //false
console.log("strict equals to", x1===x2);//false

//ex3
const myStacks = Symbol("MERNstack");
console.log("value was", myStacks);//Symbol("MERNstack")
console.log("after converting", myStacks.toString());

//ex4 to access only the value
const myvalue = Symbol("ReactJS");
console.log(myvalue);//Symbol("ReactJS");
console.log(myvalue.description);//Reactjs

//ex5 adding the object key as symbol
// let userId = Symbol('id');
// let user = {
//     name:'john',
//    [userId] : 1234
// }
// console.log(user);

//ex6 
let userId1 = Symbol('id');
let user1 = {
    name:'john',
    age: 30,
   [userId1] : 1234
}
user1[userId1]=45247;
console.log(user1);

for(let keys in user1){
    console.log(keys);
}
