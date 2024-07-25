// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

//Length
function getLength(str) {
    console.log("Original String:" +str);
    console.log("Length:" + str.length);
}

getLength("Hello world");


// indexOf
function getIndex(str, target) {
    console.log("Original String:" +str);
    console.log("Index:", str.indexOf(target));
}

getIndex("Hello World", "World");

//lastIndexOf
function getLastIdnex(str, target) {
    console.log("Original String:" +str);
    console.log("Last Index:", str.lastIndexOf(target));
}

getLastIdnex("Hello World World", "World");

//slice
function getSlice(str, start, end) {
    console.log("Original String:" +str);
    console.log("Slice:", str.slice(start, end));
}

getSlice("Hello World World", 5, 11);

//substring
function getSubString(str, start, end) {
    console.log("Original String:" +str);
    console.log("Substring:", str.substring(start, end));
}

getSubString("Hello World World", 5, 11);

//replace
function replaceString(str, target, replacement) {
    console.log("Original String:" +str);
    console.log("After Replacement:", str.replace(target, replacement));
}

replaceString("Hello World", "World", "JavaScript");

//split
function splitString(str, seperator) {
    console.log("Original String:", str);
    console.log("After Replacement:", str.split(" "));
}

splitString("Hello Into The World Of JavaScript", "World", "JavaScript", " ");

// trim
function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
}

trimString(" Hello World ");

//toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After UpperCase: ", str.toUpperCase());
}

toUpper("hello world");

//toLowerCase
function toLower(str) {
    console.log("Original String:", str);
    console.log("After UpperCase: ", str.toLowerCase());
}

toLower("hello world");
  