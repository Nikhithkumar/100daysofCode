
const groupByPalindrome=(arr:string[])=>{
    const map=new Map();

    const isPalindrome = (str:string) => str === str.split('').reverse().join('');


    for(let i=0;i<arr.length;i++){
        const reversed = arr[i].split('').reverse().join('');
        if(isPalindrome(arr[i])){
            if (!map.has('palindrome')) {
                map.set('palindrome', []);
            }
            map.get('palindrome').push(arr[i]);
        }else if (arr.includes(reversed)) {
            const key = arr[i] < reversed ? arr[i] + reversed : reversed + arr[i];
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key).push(arr[i]);
        } else {
            if (!map.has('non-palindrome')) {
                map.set('non-palindrome', []);
            }
            map.get('non-palindrome').push(arr[i]);
        }
    }

    return Array.from(map.values())

}

(function(){
    const input:string[]=["madam", "racecar", "hello", "olleh", "world", "dlrow"];
    const ouput:string[][]=[ [ 'rate', 'mate' ], [ 'kite', 'mite' ], [ 'rope', 'hope' ] ];
    console.log(groupByPalindrome(input))
})();