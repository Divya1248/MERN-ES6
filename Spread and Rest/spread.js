//spread operator with array
// const setone = ["aa","bb","cc"];
// const settwo = ["one","two","three"];
// const allset = [...setone, ...settwo];
// console.log(allset);

var person = {
    name: 'DIVYA',
    age: 21,
    place: 'Doddaballapur'
};

//creating a copy of object
const copyOfPerson = {...person};

person.name = 'sundari';
console.log('the person list is', person);
console.log('the copy of person', copyOfPerson);


const teacher ={
    name: 'chaya',
    age: 30,
    color: "snow white",
    subjects:['social','maths','science']
}


const  address ={
    city: "bangalore",
     pincode: 561203,
    landmark:"bmy"
}

//adding extra keys and value for the created objects
const teacherDetails = {...teacher, ...address};
console.log("teacher with address alldetails", teacherDetails);



const teacherwithphno = {
    ...teacher,
    phone: 123453678,
    married: false,
    getName: function(){
        return this.name;
    }
};
console.log("teacher with phone nuber",teacherwithphno);
