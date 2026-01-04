
// object practice begginer /*kono kichur details rakhar jonno akta object nite hoi*/
const student = {
    fullName: "kamal",
    age: 26,
    city: "delhi",
    isPass: true,
}
console.log(student);
// typeof all
console.log("student = ", typeof student);
console.log("fullName = ", typeof student.fullName);
console.log("age = ", typeof student.age);
console.log("student = ", typeof student.city);
console.log("student = ", typeof student.isPass);

/*---end----*/


/*--- start----*/

// key : value print
let mobile = {
    brand: "Samsung",
    price: 15000,
};
// -print brand
console.log(mobile.brand);

//  price change 
mobile.price = 12000;

//  new property add
mobile.color = "black";

//  price check over 13000 print "budget phone"
if (mobile.price < 13000) {
    console.log("budget phone")
} else {
    console.log("not budget phone")
};

//  key with value print
for (let key in mobile) {
    console.log(key, ":", mobile[key]);
};

/*-------end-----*/


/*-----start-----*/

let car = {};

car.brand = "BMW"; // add brand
car.model = "bS6"; //add model
car.price = 10000000; // add price
console.log(car);

/*-------end-------*/


/*------start-------*/

// object under function  method
const person = {
    key(sms) {
        console.log(sms);
    }
}
person.key("hello");

/*-------end-------*/


// /*------start-------*/
const laptop = {
    brand: "Samsung",
    price: 12000
};
if ("brand" in laptop) {
    console.log(true);
} else {
    console.log(false);
}
/*-------end-------*/



/*------start-------*/
// function message
const school = {
    key(name) {
        console.log(name)
    }
}
school.key("boys school");

/*-------end-------*/


/*------start-------*/
//  print all value using a loop
const computer = {
    brand: "asus",
    color: "black",
    price: 70000,
    isWarranty: true
}
for (const key in computer) {
    console.log(key, ":", computer[key]);
}
/*-------end-------*/


/*------start-------*/
//get a value inside a nested object
const university = {
    fullName: "IIT kgp",
    address: {
        city: "kharagpur",
        pin: 721390
    }
}
console.log(university.address.address);
console.log(university.address.pin);

/*-------end-------*/


/*------start-------*/

//array of object with with nested object
const newStudent = [
    { name: "Rahim", city: "delhi" },
    { name: "Karim", city: "kolkata" },
    { name: "kamal", city: "pune" }
];
for (let details of newStudent) {
    console.log(details.city);
}

/*-------end-------*/


/*------start-------*/
//nested object (object er bhetore object)
const details = {
    school: {
        name: "Rahim",
        city: "delhi"
    }
}
console.log(details.school.name);

/*-------end-------*/


/*------start-------*/
//array of object in nested object
const office = [
    {
        address: {
            city: "delhi",
            isOpen: true
        }
    }
];
for (let val of office) {
    console.log(val, val.address.city);
};

/*-------end-------*/


/*------start-------*/
//Array of objects with nested object inside
const home = [
    {
        address: {
            city: "mumbai",
            pin: 700000
        }
    },
    {
        address: {
            city: "pune",
            pin: 700390
        }
    },
    {
        address: {
            city: "kolkata",
            pin: 704909
        }
    },
];

for (let details of home) {
    // console.log(details);
    if (details.address.pin > 700000) { //pin jodi 7lac er besi hoi city print koro
        console.log(details.address.city);
    }
};
/*-------end-------*/


/*------start-------*/
//object + boolean + if/else
const user = {
    userName: "kamal",
    joined: 2019,
    isFollow: true
}
console.log(user);
if(user.isFollow){
console.log(true)
}else {
    console.log(false)   
}


/*-------end-------*/
