function flattenArray(arr:any[]): any[] {
  const result: any[] = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

//output: [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, 4]], 5, [6]]));

//nested object flattening
function flattenObject(obj: Record<string, any>, prefix = ''): Record<string, any> {
  const result: Record<string, any> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}   

// Example usage
const nestedObject = {
  a: 1, 
    b: {
        c: 2,
        d: {
        e: 3,
        f: 4
        }
    },
    g: 5
};
console.log(flattenObject(nestedObject));

//grouping objects by a property
function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  return arr.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

// Example usage
const data = [ 
    { id: 1, category: 'A' },
    { id: 2, category: 'B' },
    { id: 3, category: 'A' },
    { id: 4, category: 'C' },
    ];
console.log(groupBy(data, 'category'));


function nextGreaterElements(nums: number[]): number[] {
  const result: number[] = new Array(nums.length).fill(-1);
  const stack: number[] = [];

  for(let i = nums.length - 1; i >=0; i--){
    while(stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }
    if(stack.length) {
      result[i] = nums[stack[stack.length - 1]];
    }
    stack.push(nums[i]);
  }
    return result;
}

const input = [2, 4, 3, 5, 6, 2];
const output = nextGreaterElements(input);
console.log(output); // [4, 5, 5, 6, -1, -1]

