const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(num[0])

let [one, two, three, , , , seven] = num;

console.log(one, two, three, seven);



const user = {
    name: "kamal",
    age: 20,
    address: {
        city: "delhi",
    }
};

let { name: userName, address: { city } } = user;

console.log(userName, city);


const student = {
    name: "Kamal",
    age: 20,
    marks: null,
    city: "Kolkata"
};

let { name, marks  } = student;

if (marks  > 80) {
    console.log(`${name} passed with A grade`);
} else {
    console.log(`${name} needs improvement`);
}
