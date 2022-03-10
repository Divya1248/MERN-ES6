// Promise.all()


// const myPromise1 = new Promise(function (resolve, reject) {
// setTimeout(function () {
// resolve("my Promise one executed");
// }, 4000);
// });
// const myPromise2 = new Promise(function (resolve, reject) {
// setTimeout(function () {
// resolve("my Promise two executed");
// }, 3000);
// });
// const myPromise3 = new Promise(function (resolve, reject) {
// setTimeout(function () {
// resolve("my Promise three executed");
// }, 1000);
// });

// Promise.all([myPromise1, myPromise2, myPromise3])
// .then(function (success) {
// console.log("Response", success);
// })
// .catch(error => console.log("Error", error));




const p1 = new Promise((resolve, reject) => {
 setTimeout(() => {
 console.log('The first promise has resolved');
 resolve(10);
 // reject('False')
 }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
 setTimeout(() => {
 console.log('The second promise has rejected');
// resolve(22)
reject('Failed');
 }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
 setTimeout(() => {
 console.log('The third promise has resolved');
//resolve(30);
reject('False')
 }, 3 * 1000);
});


Promise.all([p1, p2, p3])
 .then(console.log)
 .catch(console.log);