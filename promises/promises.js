// // Ex.1
const myPromise = new Promise(function(resolve,reject){
    if(10<20){
        resolve("Its true")
    }
    else
    {
        reject("its false")
    }
})

myPromise.then(function(success){
    console.log(success)
}).catch(function(error){
    console.log(error)
})

// // Ex.2
let completed= true;
let learnJS=new Promise(function(resolve,reject){
    setTimeout(()=> {
        if(completed){
            resolve("I have completed learning JS");
        }else{
            reject("I haven't completed learning JS yet");
        }   
    },2*1000);
});

learnJS.then((success)=>{
    console.log(success)
}).catch((error)=>{
    console.log(error)
})

// // Ex.3
let myPromise1 = new Promise((resolve,reject)=>{
   let data;
    setTimeout(()=> {
        data="some payload";
        if(data){
            resolve(data);
        }else{
            reject();
        }   
    },2000);
});

myPromise1.then((data)=>{
    console.log("Received :",data)
}).catch(()=>{
    console.log("There was an error")
})
