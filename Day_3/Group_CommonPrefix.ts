const groupByCommonPrefix = (arr: string[]): string[][] => {
    arr.sort();
    let result: string[][] = [];
    let group: string[] = [arr[0]];

    const commonPrefix = (arr1: string, arr2: string): boolean => {
        let i = 0;
        while (i < Math.min(arr1.length, arr2.length) && arr1[i] === arr2[i]) {
            i++;
        }
        return i >= 2;
    };

    for (let i = 1; i < arr.length; i++) {
        if (commonPrefix(arr[i - 1], arr[i])) {
            group.push(arr[i]);
        } else {
            result.push(group);
            group = [arr[i]];
        }
    }

    result.push(group);
    return result;
};

(function() {
    const input: string[] = ["flower", "flow", "flight", "fluent", "flip", "dog", "door", "doll"];
    const output = [
        [ 'dog', 'doll', 'door' ],
        [ 'flight', 'flip', 'flow', 'flower', 'fluent' ]
      ];
    console.log(input);
})();
