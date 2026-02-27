let data = 8;
data = "kamal";
data = true;
data = undefined;
data = null;
data = Symbol("id");
data = 1233536458568n;
console.log(typeof data);

console.log(`-------------------`);

let person = {
    name: "kamal",
    age: 20
};

console.log(typeof person);
let obj1 = { name: "kamal" };;
let obj2 = obj1;
obj2.name = "uddin";
console.log(obj1.name);