let fullName = prompt("Enter your full name :-");
fullName = fullName.replaceAll(' ', '');
let username = '@' + fullName + fullName.length;
console.log('Username : ', username);
