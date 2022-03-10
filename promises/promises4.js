// // Ex.1 promise chaining
console.log('JS started');

const myPromise = new Promise((resolve,reject)=>{
    if(10<20){
        const data=[100,200,300,400];
        resolve (data);
    }
    else{
        reject("failed to fetch the data");
    }
});

myPromise.then(data=>{
    console.log("data is",data);
    const filterData = data.filter (val =>val >200 );
    return filterData;
})
.then(filterData => console.log("filtered data",filterData))
.catch(error => console.log("Error is",error));

console.log("JS ended")
    

//Promise Chaining:

// function add_positivenos_async(n1, n2) { 
//  let p = new Promise(function (resolve, reject) { 
//   if (n1 >= 0 && n2 >= 0) { 
//    resolve(n1 + n2)
//    } else {
//    reject('NOT_Postive_Number_Passed');

//   return p;
//   }
// add_positivenos_async(10,20) 
//  .then(function(result){ 
//   console.log("first result“ ,result) 
//   return add_positivenos_async(result ,result) 
//  })
//  .then(function(result){ 
//   console.log("second result“ ,result) 
//   return add_positivenos_async(result ,result) 
//  })
//  .then(function(result){ 
//   console.log("third result“ ,result) 
//  })