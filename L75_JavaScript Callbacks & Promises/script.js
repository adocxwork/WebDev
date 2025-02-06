console.log("Aditya is a hacker..")
console.log("Gupta is a hecker..")

setTimeout(() => { //asyncronous
    console.log("I am inside timeout..");
}, 2000);
setTimeout(() => {
    console.log("I am inside timeout..2");
}, 2000);

console.log("The end..")

const callback = (arg) => {
    console.log(arg);
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Adityya");
    document.head.append(sc);
}