//Callback Syntax

// function sanketsAsincFunction(cb) {
//     cb("Hello there!");
// }

// async function main() {
//     sanketsAsincFunction(function a(data) {
//         console.log(data);
//     });
// }

// main();


//Promice Syntax

// function sanketsPromiseFunction() {
//     const p = new Promise(function(resolve) {
//         resolve("Hello there 1!");
//     });
//     return p;
// }

// sanketsPromiseFunction().then(function(data) {
//     console.log(data);
// });


//Async/Await Syntax

function sanketsAsyncFunction() {
    let p = new Promise(function(resolve) {
        resolve("Hello there 1!");
    });
    return p;
}

async function main() {
    const data = await sanketsAsyncFunction();
    console.log(data);
}

main();
