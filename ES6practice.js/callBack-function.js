function details(name, age, callBack) {
    console.log(name);
    callBack(age)
}

let ageCount = (age) => {
    console.log(age);
}

details("kamal", 20, ageCount);