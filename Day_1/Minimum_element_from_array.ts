function getMinimumNumber(arr: number[]): number {
  let minimum = arr[0];
  for (const currentValue of arr) {
    if (currentValue < minimum) {
      minimum = currentValue;
    }
  }
  return minimum;
}

{
  // Main execution block
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter the size of the array: ", (nInput: string) => {
    const n = parseInt(nInput);

    if (isNaN(n) || n <= 0) {
      console.log("Please enter a valid positive integer for the array size.");
      rl.close();
      return;
    }

    console.log(`Enter ${n} numbers separated by spaces:`);

    rl.question("", (arrayInput: string) => {
      const arr = arrayInput.split(" ").map(Number);

      if (arr.length !== n || arr.some(isNaN)) {
        console.log(
          "Please ensure you entered exactly the correct number of integers."
        );
        rl.close();
        return;
      }

      const minimumValue = getMinimumNumber(arr);
      console.log(`The minimum value from the array is ${minimumValue}`);
      rl.close();
    });
  });
}
