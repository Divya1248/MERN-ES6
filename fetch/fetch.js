// json place holder

fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(json=>console.log(json))

fetch('https://apirandomuser.me/')
.then(response=>response.json()) //response is parameter
.then(json=>console.log(json))