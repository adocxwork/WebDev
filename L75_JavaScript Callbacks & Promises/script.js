console.log("Aditya is a hacker..")
console.log("Gupta is a hecker..")

setTimeout(() => { //asyncronous
    console.log("I am inside timeout..");
}, 2000);
setTimeout(() => {
    console.log("I am inside timeout..2");
}, 2000);

console.log("The end..")

const fn=()=>{
    console.log("Nothing...")
}
const callback = (arg, fn) => {
    console.log(arg);
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Adityya", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)