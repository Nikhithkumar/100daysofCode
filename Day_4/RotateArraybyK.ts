
const rotateArray =(arr:number[],k:number)=>{
    let arr1 = arr.slice(k+1);
    arr.length = k+1;
    return [...arr1,...arr]
}


(function(){
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(arr, 3));
}())