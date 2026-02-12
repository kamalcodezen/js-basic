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


for (let i = names.length - 1; i >= 0; i--){
    console.log(names[i])
}