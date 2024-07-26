// Calculate the time it takes between a setTimeout call and the inner function actually running.

let i = new Date().getTime();
console.log(i);

setTimeout(() => {
    let j = new Date().getTime();
    console.log(j);
    console.log(`The time diffrence is ${i-j} milliseconds`);
}, 1000)

