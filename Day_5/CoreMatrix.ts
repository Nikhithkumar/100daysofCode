
//Sum rows and columns of a matrix
function sumRowsAndColumns(matrix: number[][]): { rowSums: number[]; colSums: number[] } {

    const numRows = matrix.length;
    const numCols = matrix[0].length

    const rowSums = new Array(numRows).fill(0);
    const colSums = new Array(numCols).fill(0);

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            rowSums[i] += matrix[i][j];
            colSums[j] += matrix[i][j];
        }
    }
    return { rowSums, colSums };
}

(function(){
    let input:number[][]=[
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    console.log('sumRowsAndColumns', sumRowsAndColumns(input));
})();

//Spiral Traversal
function spiralTraversal(matrix: number[][]): number[] {
    const result: number[] = [];
    if (matrix.length === 0) return result;
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}

(function(){
    let input:number[][]=[
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let output:number[]=[1,2,3,6,9,8,7,4,5];  
    console.log('spiralTraversal', spiralTraversal(input))
})();

//Rotate Matrix (90° Clockwise, In-Place)

function rotate(matrix: number[][]): void {
    const n = matrix.length;

    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

(function(){
    let input:number[][]=[
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    rotate(input);
    console.log('rotate', input);
})();

//Search in Sorted Matrix

function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        if (matrix[row][col] > target) col--;
        else row++;
    }

    return false;
}

(function(){
    let input:number[][]=[
        [1, 3, 5],
        [7, 9, 11],
        [13, 15, 17]
    ];
    let target:number=9;
    console.log('searchMatrix', searchMatrix(input,target));
})();

//Maximal Square

function maximalSquare(matrix: string[][]): number {
    if (matrix.length === 0) return 0;
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp: number[][] = Array.from({ length: rows + 1 }, () => new Array(cols + 1).fill(0));
    let maxSide = 0;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    return maxSide * maxSide;

}

(function(){
    let input:string[][]=[
        ['1', '0', '1', '0', '0'],
        ['1', '0', '1', '1', '1'],
        ['1', '1', '1', '1', '1'],
        ['1', '0', '0', '1', '0']
    ];
    console.log('maximalSquare', maximalSquare(input));
})();

