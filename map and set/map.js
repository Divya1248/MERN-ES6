// const techStacks=new Map();
// techStacks.set("React",{description:"MERN STACK"}),           //setting can be done at one time
// techStacks.set("JEST",{description: "UI Testing"}),
// techStacks.set("Vue JS",{description: "MERN Stack"})
// console.log("All Stacks",techStacks.size);//3
// console.log(techStacks);

// // cannot pass in an array since it os taking index for each values

// // set can be chaining
// techStacks.set("React",{description:"MERN STACK"})           
// .set("JEST",{description: "UI Testing"})
// .set("Vue JS",{description: "MERN Stack"})
// console.log("All Stacks",techStacks.size);//3
// console.log(techStacks);

// // // to get the value
// console.log(techStacks.get('react')); //if you give small caps react also undefined as output
// console.log(techStacks.get('Vue JS'));


// // while getting the values we cannot chain
// // Insertion order is preserved in map object

// // Eg2:map with parameters (with set())

// passing an array inside map constructor
var details = new Map([
    ["Today",new Date()],
     [[1,2,3],"item"]
]);

console.log(details.size);
details.forEach((item)=>console.log(item));

// // map iterators
let receipeMap = new Map([
    ['cucumber',500],
    ['tomatoes',350],
    ['onion',50]
]);

// iterate over keys (vegetables)
for (let vegetables of receipeMap.keys()){
    console.log(vegetables);//cucumber,tomatoes,onion
}

// iterate over values(amounts)
for (let amount of receipeMap.values()){
    console.log(amount);//500 350 50 
}

// iterate over [key,value] entries
for (let allEntry of receipeMap){  //the same as of receipeMap.entries()
    console.log(allEntry);
}