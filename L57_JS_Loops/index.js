console.log("Loops :-");

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

let obj = {
    name : "Aditya Gupta",
    role : "Programmer",
    company : "Google"
}

// for (const key in obj) { // for objects
//     const element = obj[key];
//     console.log(key, element);
// }

// for (const ch of "Aditya") { // for array, iterables etc.
//     console.log(ch);
// }

// for (let a in "Adi") { //does not works..
//     console.log(a);
// }

// let i = 0;
// while (i < 6) {
    //     console.log(i);
//     i++;
// }


let i = 10;
do { // this will run at least once...
    console.log(i++);
} while (i < 5);