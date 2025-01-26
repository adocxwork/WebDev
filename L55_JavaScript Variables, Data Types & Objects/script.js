console.log("Hi there..., I'm Aditya..")
var a = 5;
var b = 6;
b = b + 1;
var c = "Aditya";
console.log("Sum : " + (a+b))
console.log(typeof a, typeof b, typeof c)

// This is incorrect...
// var 55a = 7;

const a1 = 3;
// a1 = a1 + 1; // Not allowed..!
console.log("Const Value : " + a1)


{
    var x1 = 3;
    let x2 = 4;
}
console.log("var x1 (Global variable): " + x1)
// console.log("let x2 : " + x2)


let x = "Aditya Bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r) 

let o = {
    name : "Aditya",
    "Job code" : 5600,
    isLoyal : true
}

console.log(o);
o.salary = "100crores";
console.log(o);