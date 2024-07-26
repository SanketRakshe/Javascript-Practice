//Higher order function
function f(x, fn) { // Parameter
    // f --> number
    // fn --> function
    console.log(x);
    console.log(fn);
    
    for(let i=0; i<x; i++) {
        console.log(i);
    }

    fn();
}

//Callback function passed as argument to the HOF
f(6, function exec() {
    console.log("I am a Callback function passed to the Higher order function");
});
