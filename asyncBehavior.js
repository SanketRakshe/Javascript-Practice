console.log("Hii");


//Native piece of javascript code
function timeConsumingByLoop() {
    console.log("Loop started..!");
    for(let i=0; i<1000000000; i++) {
        //do some task for time consuption
    }
    console.log("Loop ended...!");
}

//Code by runtime features
function timeConsumingByRuntime() {
    console.log("Starting timer");
    setTimeout(function exec() {
        console.log("completed timer");
    }, 5000);
}

console.log("Hii 2");
timeConsumingByLoop();
timeConsumingByRuntime();
timeConsumingByLoop();
console.log("Bye");