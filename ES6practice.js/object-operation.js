
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

let keys = Object.keys(student);
console.log(keys);

console.log(`----------`)

let values = Object.values(student);
console.log(values);

console.log(`----------`)




let entries = Object.entries(student);
console.log(entries);

