
// Check prime number
let number = 13;
let isPrime = true;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
    }
}
console.log(isPrime);


console.log(`=====------------`);


// Print prime numbers 1–50

for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}



console.log(`---------------`);


let sum = 0;
for (let i = 2; i <= 50; i++) {
    let isPrime = true;
    for (let k = 2; k < i; k++) {
        if (i % k === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sum += i;
    }
}
console.log(sum);


console.log(`------------------`);



// Factorial of a number
let result = 1;
for (let i = 1; i <= 5; i++) {
    result *= i;
}
console.log(result);