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



// filter method ** multiple element condition check and new array return
let priceCheck = price.filter((elem, ind) => {
    return elem % 2 === 0;
});

console.log(priceCheck);



// find method***  find single element 

let findPrice = price.find((elem, ind, arr) => {

    let check = elem > 10;
    return check;
})

console.log(findPrice);


let priceFind = price.find((elem) => elem % 2 === 0);
console.log(priceFind);

console.log(`--------------`);

// foreach loop just loop work as same for of loop


price.forEach((elem) => {
    console.log(elem)
})

let allSum = 0;
price.forEach((element) => {
    allSum += element;

});
console.log(allSum);
