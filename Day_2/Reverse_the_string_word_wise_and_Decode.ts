//Reverse and Decode a String Word-Wise

function reverseAndDecode(str: string): string {
    let size = str.length;
    let stk: string[] = [];
    let curStr: string = "";

    for (let i = 0; i < size; i++) {
        if (str.charAt(i) !== ' ') {
            if (/\d/.test(str.charAt(i))) {
                let num = parseInt(str.charAt(i));
                for (let j = 0; j < num - 1; j++) {
                    curStr += curStr.charAt(curStr.length - 1);
                }
            } else {
                curStr += str.charAt(i);
            }
        } else {
            stk.push(curStr);
            curStr = "";
        }
    }

    stk.push(curStr);
    curStr = "";

    let sb: string = "";

    while (stk.length > 0) {
        sb += stk.pop()!;
        if (stk.length > 0) {
            sb += " ";
        }
    }

    return sb;
}

// Example usage
let inputStr: string = "mis2ing the world";  // Input
let result: string = reverseAndDecode(inputStr);
console.log(result);  // Output: world the missing
