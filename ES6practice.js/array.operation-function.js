
let price = [12, 34, 20, 30, 40, 50];

// array.map -- array element update kore

let multiply = price.map((elem, ind, array) => elem * 2);

let sum = price.map((elem) => {
    let totalSum = elem + 2;
    return totalSum;

})

console.log(multiply);
console.log(sum);