// // function with no argument
// function my(num){
//     console.log(num);

// }
// my(); //undefined

// //function with default parameter
// function mynumber(num=10){
//     console.log(num);

// }
// mynumber();//it takes the value by default 10
// mynumber(undefined); //it takes the value by default 10
// mynumber(20); // it takes the value as 20

//ex2
function createDiv(
    height = '100px',
    width = '200px',
    border = 'solid 1px red'
)
{
    let div = document.createElement("div");
    div.style.height=height;
    div.style.width=width;
    div.style.border=border;
    document.getElementsByTagName("body")[0].appendChild(div);
    return div;
}

//createDiv()
//createDiv(undefined,undefined,'solid 5px blue');
//createDiv(undefined,'solid 5px blue');
createDiv(undefined,'','solid 5px blue');
createDiv('solid 5px blue',undefined,undefined);