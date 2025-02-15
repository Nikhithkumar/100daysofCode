
function groupAnagrams(arr: string[]):any[]{
    const map=new Map();

    for(let i=0;i<arr.length;i++){
        const key=arr[i].split('').sort().join('');
        if(!map.has(key)){
            map.set(key,[])
        }
        map.get(key).push(arr[i])
    }

    console.log(map.values())

    return Array.from(map.values())
}

(function(){
    let input:string[]=["eat", "tea", "tan", "ate", "nat", "bat"];
    let ouput:string[][]=[ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
    
    console.log(groupAnagrams(input))
})

