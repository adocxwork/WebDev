import fs from "fs/promises"
let a = await fs.readFile("Aditya.txt");
let b = await fs.appendFile("Aditya.txt", "\nThis is amazing promise.");
console.log(a.toString(), b);