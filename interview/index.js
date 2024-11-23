// A factorial number is the product of all positive integers, which are equal to or less than the given number.

// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

// console.log(factorial(5));


let num = 19
let count = 0
for (let i = 1 ; i <= num ;i++){
    if(num % i == 0){
        count+=1
    }
}
console.log(count > 2 ? "not prime":"prime")

