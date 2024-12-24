function generateBinaryNumbers(n: number): void {
    let q: string[] = [];
    q.push("1");

    let i = 1;
    while (i++ <= n) {
        let current = q[0]; // Get the front of the queue
        q.push(current + '0');
        q.push(current + '1');
        console.log(q.shift()); // Remove and print the front element of the queue
    }
}

// Example usage
let binaryNumber: number = 5;  // You can replace this with any number
generateBinaryNumbers(binaryNumber);
