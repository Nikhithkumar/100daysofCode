import * as readline from 'readline';

function NNumberOfSum(i: number, n: number, sum: number): void {
    if (i === n) {
        sum += i;
        console.log(sum);
        return;
    }

    sum += i;
    NNumberOfSum(i + 1, n, sum);
}

// Using readline to capture input in Node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number: ', (input: string) => {
    let n = parseInt(input, 10);
    NNumberOfSum(1, n, 0);
    rl.close(); // Close the interface after input is processed
});
