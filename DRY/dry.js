let chips = ['corn', 'pita', 'potato', 'tortilla'];

// // non DRY code
// console.log(chips[0]);
// console.log(chips[1]);
// console.log(chips[2]);

//DRY code
for (let i = 0; i < chips.length; i++) {
  console.log(chips[i]);
}


let drinks = ['lemonade', 'soda', 'tea', 'water'];
  let food = ['beans', 'chicken', 'rice'];
 // non DRY code
  // console.log(drinks[0]);
  // console.log(drinks[1]);
  // console.log(drinks[2]);
  // console.log(drinks[3]);

  // console.log(food[0]);
  // console.log(food[1]);
  // console.log(food[2]);

  // DRY code
//   function logItems (array) {
//     for (let i = 0; i < array.length; i++) {
//       console.log(array[i]);
//     }
//   }

//   logItems(drinks);
//   logItems(food);



  // // non DRY code
  // let f = ['bananas', 'dates', 'dried figs', 'oranges'];

  // function hi (banana) {
  //   for (let i = 0; i < banana.length; i++) {
  //     console.log(banana[i]);
  //   }
  // }

  // hi(f);

//   // DRY code
//   let fruits = ['bananas', 'dates', 'dried figs', 'oranges'];

//   function logItems (array) {
//     for (let i = 0; i < array.length; i++) {
//       console.log(array[i]);
//     }
//   }

//   logItems(fruits);
