// Find missing number (1–n array)

const nums = [1, 2, 3, 5, 6, 9];

for (let i = 1; i <= nums.length + 1; i++){
    if(!nums.includes(i)){
        console.log(i)
    }
}