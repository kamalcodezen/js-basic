// Find longest word in sentence

let details = "i am a good boy";

let convertArray = details.trim().split(/\s+/);


let longestWord = convertArray[0];
for (let i of convertArray) {
    if (i.length > longestWord.length) {
        longestWord = i;
    }
}
console.log(longestWord);



console.log(`---------------------`);



// Capitalize first letter of each word

const cities = ["delhi", "pune", "mumbai", "delhi", "kolkata", "kerala"];

let newNameCities = [];
for (let city of cities) {
    let newName = city[0].toUpperCase() + city.slice(1);
    newNameCities.push(newName);
}

console.log(newNameCities);



console.log(`---------------------`);

// Count frequency of word

let frequency = {};
for (let city of cities) {
    if (frequency[city]) {
        frequency[city]++;
    } else {
        frequency[city] = 1;
    }
}
console.log(frequency);


console.log(`---------------------`);



// Count frequency of character

let cityName = "delhi";

let cityArray = cityName.trim().split("");

let frequencyChar1 = {};
for (let city of cityArray) {
    if (frequencyChar1[city]) {
        frequencyChar1[city]++;
    } else {
        frequencyChar1[city] = 1;
    }
}
console.log(frequencyChar1);


console.log(`----------------------`);


let frequencyChar = {};

for (let city of cityName) {
    if (frequencyChar[city]) {
        frequencyChar[city]++;
    } else {
        frequencyChar[city] = 1;
    }
}
console.log(frequencyChar);

