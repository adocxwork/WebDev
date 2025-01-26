let random = Math.random();
console.log(random);
let a = prompt("Enter a : ");
let b = prompt("Enter b : ");
let c = prompt("Enter operation : ");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (random > 0.1) {
    // correct calculation
    alert(`The result is ${eval(`${a}${c}${b}`)}`);
} else {
    // incorrect calculation
    c = obj[c];
    alert(`The result is ${eval(`${a}${c}${b}`)}`);
}