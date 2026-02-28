function deductCount() {
    let count = 3;

    let myFunction = () => {
        let count = 100;

        let inside = () => {
            let count = 300; 
            if (count > 0) {
                count++;
                console.log(`count increase ${count}`);
            } else {
                console.log(`count decrease${count}`);
            }
        }
        return inside;
    }
    return myFunction();

}
let result = deductCount();
let result2 = deductCount();

result();
result();
