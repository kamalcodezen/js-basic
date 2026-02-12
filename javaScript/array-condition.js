// Count even numbers in array
const numbers = [10, 23, 12, 20, 60, 34, 24, 67, 20, 20];


let evenArray = 0;
for (let number of numbers) {
    if (number % 2 === 0) {
        evenArray++;
    }
}
console.log(evenArray);


console.log(`----------------------`);


// Find smallest number

let smallestNum = numbers[0];
for (let number of numbers) {
    if (number < smallestNum) {
        smallestNum = number;
    }
}
console.log(smallestNum);


console.log(`----------------`);


// Check element exists in array

if (numbers.includes(25)) {
    console.log("true");
} else {
    console.log("false");
}