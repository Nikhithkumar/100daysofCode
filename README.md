100 Days of DSA Challenge
Overview
Welcome to the "100 Days of DSA" challenge! This challenge is designed to help you improve your proficiency in Data Structures and Algorithms through consistent practice. The journey spans 100 days, with each day dedicated to solving problems, implementing algorithms, and refining your coding skills.

Getting Started
Daily Tasks: Each day, solve a new algorithmic problem or implement a data structure. Place your code in the corresponding day's directory.

Resources
Use online platforms like LeetCode, HackerRank, or CodeSignal for problem-solving.
Refer to reputable books and websites for in-depth explanations of data structures and algorithms.
Conclusion
By the end of this challenge, you'll not only have a solid understanding of various data structures and algorithms but also a habit of consistent coding practice. Best of luck on your "100 Days of DSA" journey!

# Running the TypeScript File with ts-node

This project includes a TypeScript script `Find_Duplicate_Strings.ts` that finds duplicate strings, words, and characters. Below are the steps to run this file using `ts-node`.

## Prerequisites

Ensure you have the following installed:

1. **Node.js** (Download from [Node.js official website](https://nodejs.org/))
2. **TypeScript** (Install globally if not already installed)
3. **ts-node** (Used to execute TypeScript files without compiling them first)

## Installation

### 1. Install TypeScript and ts-node (if not already installed)
Run the following command to install them globally:

```sh
npm install -g typescript ts-node
```

Alternatively, install them locally in the project:

```sh
npm install --save-dev typescript ts-node
```

### 2. Verify Installation
Check if `ts-node` is installed by running:

```sh
ts-node -v
```

## Running the Script

### 1. Navigate to the Project Directory
Open a terminal or PowerShell and navigate to the folder containing the script:

```sh
cd E:\project1\100daysofCode\Day_2
```

### 2. Run the TypeScript File
Use the following command to execute the script using `ts-node`:

```sh
npx ts-node Find_Duplicate_Strings.ts
```

Or, if you have installed `ts-node` globally:

```sh
ts-node Find_Duplicate_Strings.ts
```

If you encounter errors related to module resolution, try running:

```sh
npx ts-node ./Find_Duplicate_Strings.ts
```

## Expected Output
Upon successful execution, the script will display duplicate strings, words, and characters from the given input, similar to:

```sh
Duplicate Strings: Map(3) { 'apple' => 2, 'banana' => 2, 'orange' => 2 }
Duplicate Words: Map(4) { 'this' => 2, 'is' => 2, 'a' => 2, 'test' => 2 }
Duplicate Characters: Map(3) { 'r' => 2, 'g' => 2, 'm' => 2 }
```

## Troubleshooting

- If you see `ts-node: command not found`, ensure `ts-node` is installed globally or use `npx ts-node`.
- If you get a `Cannot find module` error, check if the file name is correct and exists in the specified directory.
- If necessary, reinstall dependencies using:
  
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  ```

## Conclusion
This guide helps you execute TypeScript scripts using `ts-node` efficiently. Feel free to modify the script to test different input cases!



Happy coding! 🚀