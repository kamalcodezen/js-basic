const vowelBtn = document.getElementById("vowel-btn")
    .addEventListener("click", function () {

        const inputVowel = document.getElementById("count-vowel");

        let vowelValue = inputVowel.value;  // 
        // console.log(vowelValue);
        let result = countVowel(vowelValue); //noyon

        const newDiv = document.createElement("div");
        let para = document.createElement("p");
        para.innerText = result;

        newDiv.appendChild(para);
        document.body.appendChild(newDiv);


        function countVowel(text) {
            let count = 0;
            for (let letter of text) {
                if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
                    count++;
                }
            }
            return count;
        }
    })