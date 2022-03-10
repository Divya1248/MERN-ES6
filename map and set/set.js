// let users= new Set();

// var prathap = {name:'prathap'};
// var amrutha = {name:'Amrutha'};
// var kiran = {name:'kiran'};
// var vishal = {name:'vishal'};
// var prathap = {name:'prathap'};
// var prathap = {name:'prathap'};
// var vishal = {name:'vishal'};


// users.add(prathap);
// users.add(amrutha);
// users.add(vishal);
// users.add(kiran);



// console.log("total users",users.size);//size because no duplicates are allowed

// for (var allusers of users){
//     console.log(allusers);
// }

// all duplicates will be removed in set
// var data = [4,5,2,6,8,4,2,1];
// var set = new Set(data);
// console.log('Data Length', data.length); //8
// console.log('set size', set.size); //6
// console.log(set);

//Eg:- 2
let arr = ['white','black','red','purple','green','Indigo','Blue'];
let set = new Set(arr);
console.log('After Add method',set.add('Pink'));
console.log('After has method',set.has('purple'));
console.log('After delete method',set.delete('red'));
console.log(set);
console.log('After deleting the has method value is',set.has('red'));   