let n = prompt("Enter a number :-");
let arr = [];
for(let i=1; i<=n; i++){
    arr.push(i);
}
console.log(arr);

let sum = arr.reduce((a, b) => {
    return a + b;
})
let prod = arr.reduce((a, b) => {
    return a * b;
})
console.log('Sum : ', sum);
console.log('Product : ', prod);