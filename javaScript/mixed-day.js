// Remove duplicates (basic way)

const names = ["kamal", "uddin", "shihab", "kamal", "raj", "shihab", "uddin", "sojib"];

let newNames = [];

for (let name of names) {
    if (newNames.includes(name) === false) {
        newNames.push(name);
    }
}
console.log(newNames);


