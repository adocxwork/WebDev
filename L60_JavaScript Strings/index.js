console.log("This is Strings...");
let a = "Aditya";
console.log(a);
console.log(a[2]);
console.log(a[7]); //out of bound
console.log(a.length);

let b = "Shrey";
console.log("His name is " + a + " and his friend name is " + b);
// template literals using backtic symbol `
console.log(`His name is ${a} and his friend name is ${b}`); //same thing..
// String interpolation - inserting variables into the string using backtic
// Escape sequence characters :- (see harry notes)

console.log(a.toUpperCase());
console.log(b.toLowerCase());

// slicing strings
console.log(a);
console.log(a.slice(1,3));
console.log(a.slice(1));
let c = "AdityaAd";
console.log(c.replace("Ad", "77")); //replaces first occurence
console.log(a.concat(b));
console.log(a.concat(b, "Alia"));
// trim() - removes whitespaces
console.log(b); //string is immutable..

/*
.charAt()
.startsWith()
.endsWith()
.indexOf()
*/