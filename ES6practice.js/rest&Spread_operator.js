

// rest operator
function restOperator(a, b, c, ...restOperator) {
    console.log(a, b, c, restOperator)
    return;
}
restOperator(2, 4, 5, 5, 8, 6, 5, 4, 3);

console.log(`--------------`);


// spread operator
const nums = [5, 7, 4, 9, 3, 8];

console.log(...nums);

console.log(Math.max(...nums));


const obj = {
    name: "kamal",
    age: 20
}

let obj2 = { ...obj};
// console.log(obj2)
// let obj2 = obj;

obj.name = "uddin";

console.log(obj2);