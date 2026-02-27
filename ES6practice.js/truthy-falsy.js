let data = "";       //falsy
data = 0;       //falsy
data = null;       //falsy
data = undefined;       //falsy
data = NaN;       //falsy
data = -0 // falsy
data = {}  // truthy
data = []; //truthy


if (data) {
    console.log("truthy Value");
} else {
    console.log("falsy value");
}

