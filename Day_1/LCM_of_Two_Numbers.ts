/**
 * Explanation of Changes:
 * - The Euclidean algorithm is used to compute the GCD more efficiently compared to iterating through numbers.
 * - LCM is calculated using the formula: LCM(a, b) = (a * b) / GCD(a, b).
 * - Used TypeScript features such as type annotations and modular structure.
 * - Added interactive input for a user-friendly experience.
 */

// Function to calculate the LCM (Least Common Multiple) of two numbers
const calculateLCM = (num1: number, num2: number): number => {
    // Find the GCD (Greatest Common Divisor) using the Euclidean algorithm
    const gcd = (a: number, b: number): number => {
      while (b !== 0) {
        [a, b] = [b, a % b];
      }
      return a;
    };
  
    // Calculate LCM using the relationship: LCM(a, b) = (a * b) / GCD(a, b)
    return (num1 * num2) / gcd(num1, num2);
  };
  
  // Main function to demonstrate functionality
  const mainLCM = (): void => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    readline.question('Enter two numbers separated by space: ', (input: string) => {
      const [num1, num2] = input.split(' ').map(Number);
      console.log(`LCM of ${num1} and ${num2} is ${calculateLCM(num1, num2)}`);
      readline.close();
    });
  };
  
  mainLCM();