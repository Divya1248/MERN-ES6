// //1. Array.from()
// //Array like object

function getUsers(){
    return Array.from(arguments);
}
console.log(getUsers('manu','anu','hita','rohan','rohit'));

// //ex2
console.log(Array.from('SANDY'));

// //ex3 with a mapping function (as callback function)
 console.log(Array.from([100,2000,450,300], x => x+x));
// //or
// function calculator(){
//     return Array.from(arguments,x=> x+1); 
// }
// console.log('calculator', calculator(9,8,5));

// //2.Array.of()
// var a = Array.of(7);
// console.log(a);
// var b= Array(7);
// console.log(b);


// //3.Array.find()
// const  array1 = [5,10,110,8,130];
// const found = array1.find(element => element >100);
// console.log(found);

// //-----------------
// let numbers = [1,2,3,4,5];
// console.log(numbers.find(val => val % 2 == 0));

// //ex2
// let customers = [{
//     name:"Accenture",
//     credit : 100
// },
// {
//     name: "bosch",
//     credit : 250
// },
// {
//     name: "testyantra",
//     credit: 300
// }


// ];
// console.log(customers.find(c => c.credit>100));

// //4. Array.findIndex()
// let ranks = [1,5,7,8,10,7];
// let index = ranks.findIndex(rank => rank == 7);
// console.log(index);

// //0r
// let allranks = [100,200,400,100,700];
// let allindex = allranks.findIndex(
//     (rank, allindex)=>rank ==700 && allindex >2
// );
// console.log("allindex",allindex);

//5. array.some();
var arr=[10,20,30,40,80,90];
function test(arr)
{
 return(arr>80);
} 
// test() will return a true value.
var x=arr.some(test );
document.write("Its "+x);

// passed on empty array
var arr=[];
function test(arr)
{
 return(arr>80);
} // test() will return a true value.
var ajen=arr.some(test);
document.write("Its "+ajen);


// var arr=['John','Tom','James','Sheero']; // An array is defined 
// function ismatching(arr) 
// { 
// return arr=='Shubha'; 
// } //It matches if any element in the array is equal to Sheero. 
// var chk=arr.some(ismatching); 
// document.write("Its",chk); 

// // for objects
// let customer=[{
//  name:'abc',
//  age:10
// },{
//  name:'b',
//  age:20
// },{
//  name:'c',
//  age:30
// }];
// document.write(customer.some(c=>c.age>10));


//Array.every()
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 49, 29, 10, 13];

console.log(array1.every(isBelowThreshold));


//.call()
// const person = {
//     fullName: function() {
//     return this.firstName + " " + this.lastName;
//     }
//     }
//     const person1 = {
//     firstName:"John",
//     lastName: "Doe"
//     }
//     const person2 = {
//     firstName:"Mary",
//     lastName: "Doe"
//     }
     
//     // This will return "John Doe":
//     console.log( person.fullName.call(person1));
    
    
    // =================================================================
    // const person = {
    //  fullName: function(city, country) {
    //  return this.firstName + " " + this.lastName + "," + city + "," + country;
    //  }
    //  }
     
    //  const person1 = {
    //  firstName:"John",
    //  lastName: "Doe"
    //  }
     
    //     // call
    //     console.log( person.fullName.call(person1, "Oslo", "Norway"));
       
        
    //     // apply
       
    //     console.log( person.fullName.apply(person1, ["Oslo", "Norway"]));
       
    //     // // dot bind
    //    // 
    //     let store=person.fullName.bind(person1, "Oslo", "Norway")
    //     console.log(store);


        //prevent default
        // Ex.1

// document.getElementById("myCheckbox").addEventListener("click", function(event){
//     event.preventDefault()
//    });


// //Ex.2 
// document.getElementById("demo").addEventListener("click", function(event){
//     event.preventDefault()
//    });


















