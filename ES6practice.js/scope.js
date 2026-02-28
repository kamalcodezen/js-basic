// 1.global scope  -  2.block scope  -  3.function scope;




//  1.global scope var - let - const

var name = "kamal"; // var global scope

let data = 4; //let global scope

const fullName = "kamal"; // const global scope 

for (let n of name) {
    console.log(fullName);
};



// 2.block scope  let and const

{
    var state = "kolkata";
    let city = "Delhi";
    const product = "MI";
}
// console.log(state); // var is a not block scope

// console.log(city); // let block scope

// console.log(product); // const block scope


// 3.function scope 

function functionScope() {
    var nums = 80;      // var function scope

    let numsNum = 90;    //  let function scope

    const dataNum = 45;   // const function scope
}

// console.log(nums);
// console.log(numsNum);
// console.log(dtaNum); 