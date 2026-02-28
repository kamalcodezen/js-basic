// pass by value holo primitive data type
let name = "kamal";

let nameCheck = (name) => {
    name = "uddin";
    console.log(name);
}

nameCheck(name);
console.log(name);



// pass by reference (non primitive data type);

const nums = [10, 20, 30, 40, 34, 35];

function totalNums(arr) {
    arr[0] = 300;
    arr[4] = 600;
    console.log(arr);

}
totalNums(nums);
console.log(nums)