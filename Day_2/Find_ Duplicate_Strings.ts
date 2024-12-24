// Function to find duplicate strings in an array
function findDuplicateStrings(arr: string[]): Map<string, number> {
    let map = new Map<string, number>();  // Create a map to store string counts

    // Loop through the array and count occurrences of each string
    for (let str of arr) {
        if (map.has(str)) {
            map.set(str, map.get(str)! + 1);  // If the string is in the map, increment its count
        } else {
            map.set(str, 1);  // If the string is not in the map, add it with count 1
        }
    }

    // Create a map to store only duplicate strings (count > 1)
    let duplicates = new Map<string, number>();
    for (let [key, value] of map.entries()) {
        if (value > 1) {
            duplicates.set(key, value);  // Add the duplicate strings to the result map
        }
    }

    return duplicates;  // Return the map with duplicates
}

// Function to find duplicate words in a sentence
function findDuplicateWords(sentence: string): Map<string, number> {
    let words = sentence.split(/\s+/);  // Split sentence into words based on spaces
    let map = new Map<string, number>(); // Create a map to store word counts

    // Loop through the words and count occurrences of each word
    for (let word of words) {
        if (map.has(word)) {
            map.set(word, map.get(word)! + 1);  // If the word is in the map, increment its count
        } else {
            map.set(word, 1);  // If the word is not in the map, add it with count 1
        }
    }

    // Create a map to store only duplicate words (count > 1)
    let duplicates = new Map<string, number>();
    for (let [key, value] of map.entries()) {
        if (value > 1) {
            duplicates.set(key, value);  // Add the duplicate words to the result map
        }
    }

    return duplicates;  // Return the map with duplicates
}

// Function to find duplicate characters in a word
function findDuplicateCharacters(word: string): Map<string, number> {
    let map = new Map<string, number>();  // Create a map to store character counts

    // Loop through the characters and count occurrences of each character
    for (let char of word) {
        if (map.has(char)) {
            map.set(char, map.get(char)! + 1);  // If the character is in the map, increment its count
        } else {
            map.set(char, 1);  // If the character is not in the map, add it with count 1
        }
    }

    // Create a map to store only duplicate characters (count > 1)
    let duplicates = new Map<string, number>();
    for (let [key, value] of map.entries()) {
        if (value > 1) {
            duplicates.set(key, value);  // Add the duplicate characters to the result map
        }
    }

    return duplicates;  // Return the map with duplicates
}

// Example usage for finding duplicate strings
let arr = ["apple", "banana", "orange", "apple", "orange", "banana", "grape"];
let duplicatesString = findDuplicateStrings(arr);
console.log("Duplicate Strings:", duplicatesString);

// Example usage for finding duplicate words in a sentence
let sentence = "this is a test sentence and this is a test";
let duplicatesWords = findDuplicateWords(sentence);
console.log("Duplicate Words:", duplicatesWords);

// Example usage for finding duplicate characters in a word
let word = "programming";
let duplicatesCharacters = findDuplicateCharacters(word);
console.log("Duplicate Characters:", duplicatesCharacters);
