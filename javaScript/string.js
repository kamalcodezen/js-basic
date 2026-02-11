// Count vowels in string

let name = "kamaluddin";

let countVowel = 0;
for (let i of name) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
        countVowel++;
    }
}
console.log(countVowel);



// Reverse string

let fullName = "kamaluddin";

let nameArray = fullName.split("").reverse().join("");
console.log(nameArray);


let nameArray2 = fullName.split("")
let nameRev = [];
for (let name of nameArray2) {
    nameRev.unshift(name);
}
console.log(nameRev.join(""));


console.log(`------------------`);

let revName = "";
for (let name of fullName) {
    revName = name + revName;
}
console.log(revName);



