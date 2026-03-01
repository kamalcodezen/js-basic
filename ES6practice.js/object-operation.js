
const student = {
    name: "kamal",
    age: 20,
    address: {
        city: "delhi",
        office: "noida",
        details: {
            block: "gurugram",
            ps: null
        },
    },
}

// dot notation
console.log(student.name);
console.log(student.address.office);

// bracket notation
console.log(student["age"]);

let age = "age"; //dynamically
console.log(student[age]);


// optional chaining
console.log(student.address.details.ps?.gp);

console.log(Object.keys(student.address));

console.log(`----------`)

console.log(Object.values(student.address.details))

let entries = Object.entries(student);
console.log(entries);