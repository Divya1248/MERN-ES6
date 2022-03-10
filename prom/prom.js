// async function kitchen(){
//     try{
//         await time(2000)
//         console.log(`${stocks.Fruits[0]} was selected`)
//     }
//     catch(error) {
//         console.log("customer left", error)
//     }
//     finally{
//         console.log("day ended, shop closed")
//     }
// }
// kitchen();


//using variables

try {
    let hello = prompt("type hello")
    if(hello!== 'hello') {
        throw new Error("Oops, you didn't type hello")
    }
} catch (e) {
    alert(e.message)

}finally{
    alert('thanks for playing!')
}