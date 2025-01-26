// Arrays
let arr = [1,2,3,7];
console.log(arr);
console.log("Length : " + arr.length);

console.log(arr[1]);
console.log(arr[10]); //out of bound

// Arrays are mutable
arr[2] = 49;
console.log(arr);
console.log(typeof arr); // its a object

// converting Arrays into String
console.log("This is String : " + arr.toString());
console.log(arr.join(" and "));

console.log(arr.pop()); //removes & returns the last element
console.log(arr);

console.log(arr.push(100)); //returns the length and adds element
console.log(arr);

console.log(arr.shift()); // removes & returns the first element
console.log(arr);

arr.unshift("Aditya"); // adds & returns the first element
console.log(arr);

delete arr[2];
console.log(arr);
console.log(arr.length); //value hatt gyi, length same hai, memory is still allocated..

let arr2 = ["x", "y", "z"];
console.log(arr.concat(arr2)); // does not changes the array
console.log(arr);

// inserting values 69,69 into the index b/w 1 to 2
arr.splice(1,2,69,69);
console.log(arr);

// slicing
console.log(arr.slice(1,3)); //arr[3] excluded rahega..
console.log(arr);

// reversing
console.log(arr.reverse()); //change is permanent
console.log(arr); //change is permanent
console.log(arr);