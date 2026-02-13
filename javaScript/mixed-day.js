// Remove duplicates (basic way)

const names = ["kamal", "uddin", "shihab", "kamal", "raj", "shihab", "uddin", "sojib"];

let newNames = [];

for (let name of names) {
    if (newNames.includes(name) === false) {
        newNames.push(name);
    }
}
console.log(newNames);


// Reverse array

let revArray = [];

for (let name of names) {
    revArray.unshift(name);
}
console.log(revArray);


let revName = [...names].reverse();
console.log(revName);


for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i])
}


console.log(`-----------------`);



// Find second largest number
const numbers = [23, 35, 56, 34, 24, 63, 84, 22];

let largestNum = -Infinity;
let secondLargestNum = -Infinity;

for (let number of numbers) {
    if (number > largestNum) {
        secondLargestNum = largestNum;
        largestNum = number;
    } else if (number > secondLargestNum) {
        secondLargestNum = number;
    }
}
console.log(secondLargestNum);



const nums = [10, 10, 5];

let largest = -Infinity;
let secondLargest_Num = -Infinity;

for (let num of nums) {

    if (num > largest) {
        secondLargest_Num = largest;
        largest = num;
    } else if (num > secondLargest_Num && num !== largest) {
        secondLargest_Num = num;
    }
}
console.log(secondLargest_Num)