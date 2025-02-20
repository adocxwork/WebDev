let a = prompt("Enter first number : ")
let b = prompt("Enter second number : ")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("This is not allowed..")
}
let sum = parseInt(a) + parseInt(b)
function main(){
    try {
        console.log('The sum is ', sum*x);
        return true
    } catch (error) {
        console.log('Error aa gya bhai..');
        return false
    }
    finally{
        console.log('final clause...')
    }
}
main()