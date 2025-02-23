// let arr = ['Delhi', 'Pune', 'Hyderabad']
// arr.forEach((val, idx, a)=>{
//     console.log(val, idx, a);
// })

let calcSquare = (val)=>{
    console.log(val**2)
}
let arr = [1,2,3,4,5]
arr.forEach(calcSquare)


let newArr = arr.map((val)=>{
    return val*2;
})
console.log(newArr);

let evenArr = arr.filter((val)=>{
    return val%2==0;
})

console.log(evenArr);