const s = require('fs').readFileSync(0, 'utf-8').replace(/\n$/, '');

// Write your solution here.
// Print s reversed, using two pointers converging from both ends,
// swapping characters in place.
function reverseArray(s){
    let arr = s.split("");
let left = 0
let right = arr.length -1 ;
while(left < right){
    [arr[left] , arr[right]] = [arr[right] , arr[left]]

    left++;
    right--;
}
    return arr.join("");

}

console.log(reverseArray(s))

