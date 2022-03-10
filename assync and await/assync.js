async function sample() {
    console.log("HII")

    let promise = new Promise((resolve, reject)=> {
        setTimeout(()=> resolve("done with getting data!"), 2000)
    });

    let result = await promise; // wait until promise resolves(*)
    console.log(result);
    console.log('executed!!')
}
sample();

async function go(){

    const p1 = fetch('https://api.github.com/users/wesbos');
    const p2 = fetch('https://api.github.com/users/wesbos');
    console.log('getting data');

    const resData = await Promise.all([p1],[p2]);
    const dataPromises = resData.map(response => response.json ());
    const [wes,scott] = await Promise.all(dataPromises);
    console.log(wes,scott);
    console.log("received data");
}
go();