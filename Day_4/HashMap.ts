
//longest substring without repeating characters
function lengthOfLongestSubstring(s: string): number {  
    let maxLength = 0;
    let start = 0;
    const charIndexMap: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in charIndexMap && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        charIndexMap[char] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

lengthOfLongestSubstring("abcabcbb"); // Example usage

//factorial of a number
function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5)); // Example usage

//fibonacci series
function fibonacci(n: number): number[] {   
    if (n < 0) {
        throw new Error("Fibonacci series is not defined for negative numbers.");
    }
    const fibSeries: number[] = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            fibSeries.push(0);
        } else if (i === 1) {
            fibSeries.push(1);
        } else {
            fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
        }
    }
    return fibSeries;
}

console.log(fibonacci(10)); // Example usage

//check if a string is a palindrome
function isPalindrome(s: string): boolean {
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedString = cleanedString.split('').reverse().join('');
    return cleanedString === reversedString;
}

console.log(isPalindrome("Was it a car or a cat I saw?")); // Example usage

//count the number of vowels in a string
function countVowels(s: string): number {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (const char of s) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World")); // Example usage

//find the first non-repeating character in a string
function firstNonRepeatingCharacter(s: string): string | null {
    const charCount: { [key: string]: number } = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter("swiss")); // Example usage

//reverse a string
function reverseString(s: string): string {
    return s.split('').reverse().join('');
}  

console.log(reverseString("Hello World")); // Example usage

//find the longest common prefix among an array of strings
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === '') return '';
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Example usage

//check if two strings are anagrams
function areAnagrams(s1: string, s2: string): boolean {
    const normalize = (s: string) => s.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort().join('');
    return normalize(s1) === normalize(s2);
}

console.log(areAnagrams("listen", "silent")); // Example usage

//find the intersection of two arrays
function intersection(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result: number[] = [];

    for (const num of set1) {
        if (set2.has(num)) {
            result.push(num);
        }
    }

    return result;
}

// Example usage
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // Output: [3, 4]

//find the union of two arrays
function union(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result: number[] = [];

    for (const num of set1) {
        result.push(num);
    }
    for (const num of set2) {
        if (!set1.has(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(union([1, 2, 3], [3, 4, 5])); // Example usage: Output: [1, 2, 3, 4, 5]

//find the difference between two arrays
function difference(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result: number[] = [];

    for (const num of set1) {
        if (!set2.has(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(difference([1, 2, 3], [2, 3, 4])); // Example usage: Output: [1]

//find the symmetric difference between two arrays
function symmetricDifference(arr1: number[], arr2: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result: number[] = [];

    for (const num of set1) {
        if (!set2.has(num)) {
            result.push(num);
        }
    }
    for (const num of set2) {
        if (!set1.has(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(symmetricDifference([1, 2, 3], [2, 3, 4])); // Example usage: Output: [1, 4]