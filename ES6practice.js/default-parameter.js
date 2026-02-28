
function defaultParameter(a = 0, b = 0) {
  return add = a + b
}

console.log(defaultParameter(12));
console.log(defaultParameter());
console.log(defaultParameter(12, 5));
console.log(defaultParameter(undefined, 5));
console.log(defaultParameter(null, 8));