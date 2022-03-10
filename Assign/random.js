var myArray = [
    "harsha",
    "divya",
    "dhana",
    "karthik",
    "balaji",
    "ishaq",
    "amrutha",
    "ankitha",
    "prathap",
    "badri"
    ];
//     function change(){
//     var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
//    // console.log(randomItem)
   
//     var ele=document.getElementById('demo')
//     ele.innerHTML=randomItem;
//     }

    //another method
    var h1=document.createElement('h1')
    document.body.appendChild(h1);
    var button= document.createElement('button')
    document.body.appendChild(button);
    button.textContent="Click here to random name"
    button.addEventListener('click',change)
    function change(){
        var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
     h1.innerHTML=randomItem
    }