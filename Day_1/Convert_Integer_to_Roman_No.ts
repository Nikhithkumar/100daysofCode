/**
 * Function: integerToRoman
 * Converts an integer to its Roman numeral representation.
 *
 * Problem:
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.
 * Example:
 *   Symbol       Value
 *   I            1
 *   V            5
 *   X            10
 *   L            50
 *   C            100
 *   D            500
 *   M            1000
 *
 * Roman numerals are usually written largest to smallest from left to right. 
 * However, when a smaller numeral appears before a larger numeral, it is subtracted.
 * For example:
 *   - IV = 4 (5 - 1)
 *   - IX = 9 (10 - 1)
 *
 * Task:
 * Convert a given integer `n` (1 ≤ n ≤ 3999) into a Roman numeral.
 *
 * Example:
 * Input: n = 10
 * Output: "X"
 */

function integerToRoman(n: number): string {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const symbols = [
      "M",   // 1000
      "CM",  // 900
      "D",   // 500
      "CD",  // 400
      "C",   // 100
      "XC",  // 90
      "L",   // 50
      "XL",  // 40
      "X",   // 10
      "IX",  // 9
      "V",   // 5
      "IV",  // 4
      "I",   // 1
    ];
  
    let result = ""; 
  
    // Iterate through the values array
    for (let i = 0; i < values.length; i++) {
      // While the number `n` is greater than or equal to the current value
      while (n >= values[i]) {
        n -= values[i];         // Subtract the value from `n`
        result += symbols[i];   // Append the corresponding Roman symbol to the result
      }
    }
  
    return result; // Return the Roman numeral representation
  }
  
  // Test the function
  const n = 10; // Example input
  console.log(integerToRoman(n)); // Output: "X"
  