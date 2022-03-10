// // Rest operator (rest should be used at least)
// function printAnimals(ani1,ani2,...animals){
//     console.log("animal one",ani1);
//     console.log("animal two",ani2);
//     console.log("All",animals);


// // we cant use const in for loop there is no reassigning in const
// for(let i=0;i<animals.length;i++){
//     console.log(animals[i]);
//     }
// }

// printAnimals("lion","tiger","cow","dog","snake","tortise");


// Example 2 

function sum(...num){
    let total = 0;
    for(let i=0;i < num.length;i++){
        total += num[i];
    }
    return total;
}
// const val = sum(100,200);
// console.log("The sum of two value is",val);

const val1 = sum(130,140,240);
 console.log("the sum of three value is",val1);