
// var hoisted but undefined
console.log(data);
var data = 2;


// let - const hoisted but TDZ  
console.log(number);
console.log(num);
let num = 3;
const number = 4;