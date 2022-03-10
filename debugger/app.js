
//using console.log as debuging type
// const submitName = (event) => {
//     event.preventDefault(); //to avoid page reloading
//     const name_input = document.getElementById('name_input');
   
//     console.log(name_input);
   
//     const name = name_input.value;
   
//     console.log(name); //so the name should be replaced with value
   

//    // reversing the string logic
//     const character_array = name.split("");
//     const reversed_characters_array = character_array.reverse();
//     const reversed_name = reversed_characters_array.join("");
//     document.getElementById('reversed_name').innerHTML = reversed_name;
//    }


//with debugger
//    const submitName = (event) => {
//     event.preventDefault(); //to avoid page reloading
//     const name_input = document.getElementById('name_input');
//     debugger;
//     const name = name_input.value;
//      debugger;//so the name should be replaced with value
   

//    // reversing the string logic
//     const character_array = name.split("");
//     debugger;
//     const reversed_characters_array = character_array.reverse();
//     debugger;
//     const reversed_name = reversed_characters_array.join("");
//     debugger;
//     document.getElementById('reversed_name').innerHTML = reversed_name;
//    }

   //without debugger
   const submitName = (event) => {
    event.preventDefault(); //to avoid page reloading
    const name_input = document.getElementById('name_input');
    const name = name_input.value;
     
   // reversing the string logic
    const character_array = name.split("");
    const reversed_characters_array = character_array.reverse();
    const reversed_name = reversed_characters_array.join("");
    document.getElementById('reversed_name').innerHTML = reversed_name;
   }

