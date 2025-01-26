let arr = [1,13,5,7,11];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
// }

let newArr = arr.map((e, index, arr)=>{
    return e**2;
})

console.log(newArr);

let greaterThanSeven = (e) => {
    if(e>7){
        return true;
    }
    return false;
}
console.log("Filter");
console.log(arr.filter(greaterThanSeven));

// same thing.. as above..
console.log(arr.filter((e) => {
    if(e>7){
        return true;
    }
    return false;
}
));


let arr2 = [1,2,3,4,5,6];
const red = (a,b) => {
    return a*b;
}

console.log(arr2.reduce(red));

let str = "Aditya";
let arr4 = Array.from(str); //str to array
console.log(arr4);