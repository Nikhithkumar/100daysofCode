function isPrime(num: number): boolean {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not a prime number
        }
    }
    return true; // It is a prime number
}

function generatePrimes(limit: number): void {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

// Example usage
let limit: number = 50;  // Generate prime numbers up to 50
generatePrimes(limit);
