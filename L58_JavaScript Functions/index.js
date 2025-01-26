function nice(name) {
    console.log("Hello " + name  + ", hope you're doing good..!!");
}

function sum(a, b, c=3) {
    return a + b + c;
}

nice("Adi");
let a = 5, b = 7;
console.log("Sum of " + a + " and " + b + " is (+3): " + sum(a, b));
console.log("Sum of " + a + " and " + b + " is (+1): " + sum(a, b, 1));


// Arrow function...
const func1 = (x) => {
    console.log("I am an arrow function with " + x);
}
func1(77);