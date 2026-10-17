const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const m = parseInt(data[0]);
const nums1 = data[1].split(' ').map(Number);
const n = parseInt(data[2]);
const nums2 = data[3].split(' ').map(Number);

// Write your solution here.
// For each value in nums1, find its next greater element in nums2
// (the first strictly larger value to its right, or -1 if none). A
// monotonic decreasing stack over nums2 resolves all of them in one
// pass. Print the results space-separated.


function nextGreaterElement(nums1,nums2){
 let result = []

 for (let x of nums1){
    let idx = nums2.indexOf(x)
    let answer = -1;

    for(let j = idx + 1; j < nums2.length;j++){
        if(nums2[j] > x) {
            answer = nums2[j]
            break;
        }

    }
    result.push(answer);
 }
 return result
        
}


console.log(nextGreaterElement(nums1,nums2).join(" "))

