// map , filter , find


let price = [12, 34, 21, 39, 40, 50];

// array.map -- array element update kore

let multiply = price.map((elem, ind, array) => elem * 2);

let sum = price.map((elem) => {
    let totalSum = elem + 2;
    return totalSum;

})

// console.log(multiply);
// console.log(sum);



// filter multiple element condition check and new array return
let priceCheck = price.filter((elem, ind) => {
    return elem % 2 === 0;
});

console.log(priceCheck);

