// Print all elements
const numbers = [23, 34, 45, 57, 67, 85, 46];

for (let number of numbers) {
    console.log(number);
}


// Find sum of array
let sumArray = 0;
for (let number of numbers) {
    sumArray += number;
}
console.log(sumArray);


console.log(`-----------------`);

// Find largest number
let largestNumber = numbers[0];
for (let number of numbers) {
    if (number > largestNumber) {
        largestNumber = number;
    }
}
console.log(largestNumber);