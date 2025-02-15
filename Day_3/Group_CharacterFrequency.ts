
const groupByCharFrequency=(arr:string[])=>{

    const getFrequencyKey=(word:string)=>{
        const freq = Array(26).fill(0);
        for (let char of word) {
            freq[char.charCodeAt(0) - 97]++;
        }

        return freq.join('#');
    }

   const map =new Map();
    for(let i=0;i<arr.length;i++){
        const key = getFrequencyKey(arr[i]);
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(arr[i])
    }

    return Array.from(map.values())
}

(function(){
    const input:string[]=["abb", "bba", "bab", "abc", "cab", "bac"];
    const ouput=[ [ 'abb', 'bba', 'bab' ], [ 'abc', 'cab', 'bac' ] ]
    console.log(groupByCharFrequency(input))
})();