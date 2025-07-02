const prompt = require("prompt-sync")(); // import prompt-sync

let number = prompt("Enter any number: ");

function Armstrong(num) {
    let str = num.toString();
    let power = str.length;
    let sum = 0;

    for (let i = 0; i < power; i++) {
        sum += Math.pow(Number(str[i]), power);
    }

    if (sum === Number(num)) {
        console.log(num + " is an Armstrong Number");
    } else {
        console.log(num + " is NOT an Armstrong Number");
    }
}

Armstrong(number);
