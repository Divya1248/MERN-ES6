// let name="Dhanush";
// let name = "divya";
// console.log(name);// it cannot be redeclared its output is undefined

// let name="Dhanush";
//  name = "divya";
// console.log(name);// it can be update the value its output is divya

//ex1
// let x=1;
// if(x===1){
//     let x=2;
//     console.log(x);
// }
// console.log(x);

// // //ex2
// function test(){
//     let x=2;
//     {
//         let x=3;
//         console.log(x);
//     }
//     console.log(x);
// }test();

//const keyword
// const x=1;
// if(x===1){
//     const x=2;
//     console.log(x);
// }
// console.log(x);

// // //ex2
// function test(){
//     const x=2;
//     {
//         const x=3;
//         console.log(x);
//     }
//     console.log(x);
// }test();


const x= [1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<10;i++){
    setTimeout(() => console.log(x[i]),1000);
}

for(var i=0;i<10;i++){
    setTimeout(()=> console.log(x[i]),1000);
}






