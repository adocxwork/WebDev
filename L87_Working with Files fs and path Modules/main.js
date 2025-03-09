const fs = require("fs");
// console.log(fs);
console.log("Starting..");
// fs.writeFileSync("Aditya.txt", "Aditya is a good boy.");
fs.writeFile("Aditya2.txt", "Aditya is a bad boy.", ()=>{
    console.log("Done...");
    fs.readFile("Aditya2.txt", (error, data)=>{
        console.log(error, data.toString());
    });
});
fs.appendFile("Aditya2.txt", "\nAditya Robo.", (e, d)=>{
    console.log(d);
});
console.log("Ending..");