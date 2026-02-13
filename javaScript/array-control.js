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


console.log(`---------------------`);


// Remove duplicates

const nums = [22, 12, 34, 12, 65, 45, 65, 87, 34, 87];

let newNums = [];
for (let num of nums) {
    if (newNums.includes(num) === false) {
        newNums.push(num);
    }
}
console.log(newNums);



console.log(`------------------------`);

// Count frequency of each element

const names = ["a", "b", "a", "c", "b", "a","d"];

let frequency = {};

for (let name of names) {
    if (frequency[name]) {
        frequency[name]++;
    } else {
        frequency[name] = 1;
    }
}
console.log(frequency);