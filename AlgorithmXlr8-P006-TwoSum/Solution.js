const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [n, target] = data[0].split(/\s+/).map(Number);
const nums = data[1].split(/\s+/).map(Number);

// Write your solution here.
// Print the two indices (space-separated) whose values sum to target.

function twoSum(nums,target){
    let seen = {}
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let complement = target - num;
        if( complement in seen){
            return [seen[complement],i]
        } else{
            seen[num] = i
        }
    }
    return []
}

console.log(twoSum(nums,target))