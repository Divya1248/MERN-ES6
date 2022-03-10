function printName(firstname,lastname,age){
     console.log(`firstname: ${firstname}, lastname: ${lastname},age:${age}`);
}
printName('shamanth','gowda',21);

// Template literals:

//before es6:

var person = { name: 'Tyler', age: 28 };
console.log('Hi, my name is ' + person.name + ' and I am ' + person.age + ' years old!');
// 'Hi, my name is Tyler and I am 28 years old!'


//after es6:

const person = { name: 'Tyler', age: 28 };
console.log(`Hi, my name is ${person.name} and I am ${person.age} years old!`);
// 'Hi, my name is Tyler and I am 28 years old!'
