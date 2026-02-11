// Print numbers divisible by 3 from 1–50
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

console.log(`-------------------`);

// Count numbers divisible by 5 from 1–100
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        count++;
    }
}
console.log(count);

console.log(`--------------------`);

// Sum of even numbers from 1–50
let sumEven = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log(sumEven);

console.log(`=--------=-------=`);

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
