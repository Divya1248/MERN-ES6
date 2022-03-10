// 1. check if all array elements are equal or not
// var arr=[1,2,3,1,4]
// for(i=0;i<arr.length;i++){
//     if(arr[i]==arr[i+1]){
//         console.log("they are same")
//     }
    
//     else{
//         console.log("they are not same")
//     }

//     break;
// }


// 2 sort an array of numbers in descending order
// var arr=[1,2,1,6,7]
//  var arr1=arr.sort(function(a,b){
// return b-a;
// })
// console.log(" descending oder of array",arr1)



// // 3 sort an array of string alphabitcally
// var arra=["z","c","a","b"]
// console.log(" arraging string alphabatically",arra.sort())

// //4 return the average of an array of numbers
// var arrayz=[5,4,7,7]

//  var red=arrayz.reduce(function(a,b){
//  return a+b;
//  }

//  )
//  console.log(red/arrayz.length)



// 5 return the longest string from the array
// var arrayz=["audi","benz","fords","ferari"]
// var lo=arrayz.reduce( function nm(a,b){
// return a.length<b.length?b:a
// })
// console.log("the longest string from array",lo);

// 6 merge orbitary number of arrays
// var a=[10,20,50]
// var b=[50,60,60]
// var c=[...a,...b];//spread

// console.log("the concat of the arrays",c)

// //7 remove specific array element
// var a=[10,20,50]
// console.log("the removed value from the array",a.splice(2,1));

// 8 merge the two array element with duplicate values
// var a=[60,20,60]
// var b=[50,60,60]
// var c=b.concat(a)
// console.log(" element with duplicate values",c)

// 9 sum up all array elements with values greater then 
// incomplete ques

// 10 create range of numbers
 var a=prompt("enter a starting range") 
 var b=prompt("enter a ending range") 

for(a=a;a<=b;a++){
    console.log("the rangeis",a)
 }

// 11 return last n array element
//var a=[60,20,70]
//console.log(" returned last n array element from [60,20,70]",a.slice(2,3))

// 12 group array of strings alphabatically by first letter
// var arr=["orange","apple","mango"]
// console.log("grouping array of strings alphabatically by first letter",arr.sort())


//===================================================
//1 compare two dates
// var d1 = new Date();
// var d2 = new Date(d1);
// console.log(d1.getTime() === d2.getTime()); //True
// console.log(d1 === d2); // False



//2 difference between the dates
// var date1, date2;  
// //define two date object variables with dates inside it  
// date1 = new Date("Jan 2 , 2020");  
// date2 = new Date ("Dec 15, 2021, 21:45:10");  

// //calculate total number of seconds between two dates  
// var total_seconds = Math.abs(date2 - date1) / 1000;  

// //calculate days difference by dividing total seconds in a day  
// var days_difference = Math.floor (total_seconds / (60 * 60 * 24));  
  
// document.write("Number of days between dates from current date <br>" +   
//                 date1 + " and <br>" + date2 + " are: <br>"   
//                 + days_difference + " days");  



  //3 check if two dates are equal or not
//   const datesAreOnSameDay = (first, second) =>
//     first.getFullYear() === second.getFullYear() &&
//     first.getMonth() === second.getMonth() &&
//     first.getDate() === second.getDate();

//   var arr= datesAreOnSameDay(new Date("Dec 15, 2021"), new Date("Dec 15, 2021")) ;   
//   console.log(arr);   

  //5 check if one date is greater than another
//   var date1 = new Date('December 25, 2017 01:30:00');
// var date2 = new Date('June 18, 2016 02:30:00');

// //best to use .getTime() to compare dates
// if(date1.getTime() === date2.getTime()){
//           console.log("two dates are same")
// }

// if(date1.getTime() < date2.getTime()){
//     console.log("date1 is earlier",date1);
// } 
// else{
//     console.log("date2 is earlier",date2);
// }       


// // 6 add n days to an existing dates
// Date.prototype.addDays = function (days) {
//     const date = new Date(this.valueOf());
//     date.setDate(date.getDate() + days);
//     return date;
// };

// // Add 7 Days
// const date = new Date('2020-12-02');

// console.log(date.addDays(7));

//7 calculate difference b/w hours , seconds, milliseconds
// function timeDiffCalc(dateFuture, dateNow) {
//     let diffInMilliSeconds = Math.abs(dateFuture - dateNow) / 1000;

//     // calculate days
//     const days = Math.floor(diffInMilliSeconds / 86400);
//     diffInMilliSeconds -= days * 86400;
//     console.log('calculated days', days);

//     // calculate hours
//     const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
//     diffInMilliSeconds -= hours * 3600;
//     console.log('calculated hours', hours);
    
//     //calculate minutes
//     const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
//     diffInMilliSeconds -= minutes * 60;
//     console.log('minutes', minutes);

    // let difference = '';
    // if (days > 0) {
    //   difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    // }

    // difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    // difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 
    // return difference;
//}

//console.log(timeDiffCalc(new Date('2019/10/1 04:10:00'), new Date('2019/10/2 18:20:00')));

// the time difference is:
// 1 day, 14 hours, 10 minutes

// 8 return nearest quarter an hour of date
let roundTime = (hours, minutes, minutesToRound) => {

    // Convert hours and minutes to minutes
    time = (hours * 60) + minutes; 
    let rounded = Math.round(time / minutesToRound) * minutesToRound;

    let roundedHours = Math.floor(rounded / 60)
    let roundedMinutes = rounded % 60

    return { hours: roundedHours, minutes: roundedMinutes }
}

// USAGE //

// Round time to 15 minutes
console.log(roundTime(7, 52, 15)); // {hours: 7, minutes: 45}
roundTime(7, 53, 15); // {hours: 8, minutes: 0}
roundTime(1, 10, 15); // {hours: 1, minutes: 15}