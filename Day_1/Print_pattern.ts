{
    function printPattern(row: number, column: number): void {
        for (let i = 1; i <= row; i++) {
            let rowOutput = '';
            for (let j = 1; j <= column; j++) {
                if (i === 1 || i === row || j === 1 || j === column) {
                    rowOutput += '*';
                } else {
                    rowOutput += ' ';
                }
            }
            console.log(rowOutput);
        }
    }

    // Use readline only if it's defined
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Enter number of rows: ", (rowInput: string) => {
        const row = parseInt(rowInput);

        rl.question("Enter number of columns: ", (columnInput: string) => {
            const column = parseInt(columnInput);
            printPattern(row, column);
            rl.close();
        });
    });
}