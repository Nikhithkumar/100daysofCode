
const groupByVowelPattern=(arr:string[])=>{
    const map=new Map();

    const getVowelPattern=(word:string)=>word.match(/[aeiou]/g)?.join('')||''

    for(let i=0;i<arr.length;i++){
        const key=getVowelPattern(arr[i]);
        if(!map.has(key)){
            map.set(key,[]);
        }
        console.log('map',map)
        map.get(key).push(arr[i]);
    }

    return Array.from(map.values());
}

(function(){
    const input:string[]=["rate", "kite", "mite", "rope", "hope", "mate"];
    const ouput:string[][]=[ [ 'rate', 'mate' ], [ 'kite', 'mite' ], [ 'rope', 'hope' ] ];
    console.log(groupByVowelPattern(input))
})();