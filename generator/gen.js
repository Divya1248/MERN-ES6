// function* generator(i){
//     yield i;
//     yield i+10;
// }
//  const gen = generator(10);

//  console.log(gen.next().value);
//  console.log(gen.next().value);

//  //esx2
//  function* generatorit() {
//       let arrayOfYields = [yield,yield,yield];
//       console.log(arrayOfYields);
//  }

// let iter = generatorit();
// iter.next();4
// iter.next('PHP');
// iter.next('Javascript');
// iter.next('Linus');


//ex3
function* generatorit() {
    yield 77;
    yield [ 
        'Node', 'Angular' , 'React'
    ]
}

let iter = generatorit();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

// //ex4 spread operator with generator
// function* seasons() {
//     yield 'spring';
//     yield 'summer';
//     yield 'fall';
//     yield 'winter';
// }

// let theseasons = seasons();
// console.log(theseasons.next()); // spring
// console.log([...theseasons]); // summer , fall , winter
// console.log(theseasons.next()); //undefined

// // let generator = generateSequence();
// // alert(generator); // [object Generator]
// // The main method of a generator is next().
// // When called, it runs the execution until the nearest yield <value> statement.

// // The result of next() is always an object with two properties:
// // value : the yielded value.
// // done : true if the function code has finished, otherwise false.

// // let one = generator.next();

// // alert(JSON.stringify(one)); // {value: 1, done: false}