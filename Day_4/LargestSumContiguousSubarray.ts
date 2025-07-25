//1. Find the Largest Sum Contiguous Subarray (Kadane’s Algorithm)

  const maxSubarraySum=(arr: number[])=>{
    let currentSum = 0;
    let maxSum = 0;
    let start =0, end=0, tempStart=0
    for(let i = 0 ; i<arr.length;i++){
        currentSum += arr[i];
        if(currentSum > maxSum){
            maxSum = currentSum ;
            start = tempStart;
            end = i;
        }

        if(currentSum < 0){
            currentSum = 0;
            tempStart = i+1;

        }
    }
    const Subarray = arr.slice(start, end+1);
    return {maxSum,Subarray}
  }

(function(){
    let arr: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const result = maxSubarraySum(arr)
    console.log(result)
}())
