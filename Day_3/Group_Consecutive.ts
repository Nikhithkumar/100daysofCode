
const groupConsecutive=(arr:string[])=>{
    arr.sort();
    const result = [];
    let group = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) === arr[i - 1].charCodeAt(0)) {
            group.push(arr[i]);
        } else{
            result.push(group);
            group = [arr[i]];
        }
    }

    result.push(group);
    return result;
}


(function(){
    const input:string[]=["cat", "car", "bat", "bar", "apple", "apricot"];
    const output=[ [ 'apple', 'apricot' ], [ 'bar', 'bat' ], [ 'car', 'cat' ] ]                                                                                           
    console.log(groupConsecutive(input))
})();