// 🔁 Revision

// Print 1–10

// Even / Odd

// 🆕 New

// Count vowels

// Find largest in array

// 🌐 DOM

// Input → vowel count show

let number = 10;
for (let i = 1; i <= number; i++) {
    console.log(i);
}

console.log(`--------------------------`);

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log(`-----------------`);

document.getElementById("submit-btn")
    .addEventListener("click", function () {
        const userInput = document.getElementById("user-input");
        let inputValue = userInput.value;
        let result = countVowel(inputValue);

        const totalValue = document.querySelector(".vowel-result");
        totalValue.innerText = result;

    });

function countVowel(text) {
    /*  text = text.toLowerCase();
      let count = 0;
      for (let t of text) {
          if (t === "a" || t === "e" || t === "i" || t === "o" || t === "u") {
              count++;
          }
      }
      return count;   */
    let vowel = "aeiou";
    text = text.toLowerCase();
    let count = 0;
    for (let char of text) {
        if (vowel.includes(char)) {
            count++;
        }
    }
    return count;
}

