// //1. program to generate a multiplication table
//Create a simple multiplication table asking the user the number of rows and columns he wants.
// var rows = prompt("Enter how many rows");
// var cols = prompt("Enter how many columns");
// createTable(rows, cols);
// function createTable(rows, cols)
// {
//  var j=1;
//  var output = "<table border='1' width='300' cellspacing='0'cellpadding='5'>";
//  for(i=1;i<=rows;i++)
//  {
//  output = output + "<tr>";
//  while(j<=cols)
//  {
//  output = output + "<td>" + i*j + "</td>";
//  j++
//  }
//  output = output + "</tr>";
//  j = 1;
// }
// output = output + "</table>";
// document.write(output);
//  }

// //or
// // // // take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;
   

//     // display the result
//     console.log(` ${i} *${number} = ${result}`);
// }


 
            
// //  //2. form
// // function passValidate()

// // {

// //     var pass = document.getElementById("pass").value;

// //     var cpass = document.getElementById("cpass").value;



// //     if(pass == cpass)

// //         {

// //             console.log("4");

// //             document.getElementById("e2").innerText = " "; 

// //         }

// //         else

//         {
//             console.log("5")
// document.getElementById("e2").style.color = "red";

//             document.getElementById("e2").innerText = "Password Mismatch ";   

//         }

// }



// function emailValidate()

// {

//     var emailId = document.getElementById("emailId").value;



//     console.log("1");

//     //var regex = /^\w+([-.]?\w+)@\w+([-.]?\w+)\.\w+([-.]\w+)*$/;



//     if( regex.test(emailId))

//     {

//         console.log("2");

//         document.getElementById("e1").innerText = " ";

//     }

//     else

//     {

//         console.log("3");

//         document.getElementById("e1").style.color = "red";

//         document.getElementById("e1").innerText = "Incorrect Email Id ";

//     }

// }



// // 3.
function trigger()

	{

	document.getElementById("hover").addEventListener("mouseover", popup);

	function popup()

	{

	alert("Welcome to my WebPage!!!");

	}

	}
    trigger();


//calcy
// function calc()
// {
//     var n1 = parseFloat(document.getElementById('n1').value);
//     var n2 = parseFloat(document.getElementById('n2').value);
    
//     var oper = document.getElementById('operators').value;
    
//     if(oper === '+')
//     {
//         document.getElementById('result').value = n1+n2;
//     }
    
//     if(oper === '-')
//     {
//         document.getElementById('result').value = n1-n2;
//     }
    
//     if(oper === '/')
//     {
//         document.getElementById('result').value = n1/n2;
//     }
    
//     if(oper === 'X')
//     {
//         document.getElementById('result').value = n1*n2;
//     }
// }


// //duplicate
function duplicate(arr) {
    console.log(arr.concat(arr));
  }
  
  duplicate([1,2,3,4,5])

  //delete repeat characters
  let n= ['a','b','c','a'];
  let m = [...new Set(n)];
  console.log(m);


  //compare two date 
  var d1 = new Date();
var d2 = new Date(d1);
console.log(d1.getTime() === d2.getTime()); //True
console.log(d1 === d2); // False

//convert to different timezone
//console.log(event.toLocaleString('en-GB', { timeZone: 'UTC' })); //29/06/2019, 09:56:00




