// Given a number N and a digit D, find how many times the digit D appears in the number N.

function countFrequency(num: number, digit: number): number {
    let counter = 0;
    while (num > 0) {
        const rem = num % 10;
        if (rem === digit) {
            counter++;
        }
        num = Math.floor(num / 10);
    }
    return counter;
}

// Block scope for the first part using readline
{
    let readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Enter a number: ", (numInput: string) => {
        readline.question("Enter the digit to count: ", (digitInput: string) => {
            const num = parseInt(numInput);
            const digit = parseInt(digitInput);
            console.log('num', num, digit);
            console.log(`Frequency of ${digit} in ${num} is: ${countFrequency(num, digit)}`);
            readline.close();
        });
    });
}