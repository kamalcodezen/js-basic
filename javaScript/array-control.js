// Find second smallest

const numbers = [23, 35, 24, 56, 64, 68, 35];


let smallNumber = Infinity;
let secondSmallestNum = Infinity;
for (let number of numbers) {
    if (number < smallNumber) {
        secondSmallestNum = smallNumber;
        smallNumber = number;
    } else if (number < secondSmallestNum) {
        secondSmallestNum = number
    }
}

console.log(smallNumber);
console.log(secondSmallestNum);
