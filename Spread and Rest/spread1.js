// // spread operator with array
// const setone = ['aa','bb','cc'];
// const settwo = ['one','two','three'];
// const allset = [...setone,...settwo];
// console.log(allset);//aa bb cc one two three

// // spread operator with object
// const person={
//     name:"amu",
//     place:"blore",
//     age:"22"
//  };

// //  creating copy of objecct
// const copyOfPrsn = {...person};

// person.name = "sundari";
// console.log("the person is",person);//name
// console.log("the copy of person is",copyOfPrsn);//name


const teacher = {
    name:"chaya",
    age: 30,
    subject: ['social','maths']
};

const address = {
    street:'Rojipur',
    area:'doddaballapur',
    state:'Karnataka'
};


// adding extra keys and value for the created objects
const teacherDetails = {...teacher,...address} ;
console.log("teacher with address alldetails",teacherDetails);

const teacherWithPhoneNo = {
    ...teacher,
    phone: 123456,
    married: false,
    getName : function(){
        return this.name;
    }
}

console.log("teacher with phone number",teacherWithPhoneNo);