/*
This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **
It performs wrong operation 10% of the times
a = Math.random(); --> 0 - 1
*/

let a, b, res, o, isFault, temp;
while (true) {
    console.log("Enter two numbers :-");
    a = prompt("a : ");
    b = prompt("b : ");
    o = prompt("Operator : ");
    temp = Math.random();
    isFault = temp <= 0.1;
    if (isFault) {
        if (o == "+") res = a - b;
        else if (o == "*") res = a + b;
        else if (o == "-") res = a / b;
        else if (o == "/") res = a ** b;
        else res = -1;
    } else {
        if (o == "+") res = a + b;
        else if (o == "*") res = a * b;
        else if (o == "-") res = a - b;
        else if (o == "/") res = a / b;
        else res = -1;
    }
    console.log("Result : " + res);
    loo = confirm("Continue ? : ");
    if (!loo) break;

}
console.log("Program terminated...");