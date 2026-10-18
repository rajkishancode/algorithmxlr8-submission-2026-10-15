const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const num = parseInt(data[0]);



// Write your solution here.
// Print the single-digit result of repeatedly summing num's digits.
function addDigits(num){
  while(num >= 10){
    let digitSum = 0;
    let temp = num;

    while(temp > 0){
            digitSum += temp % 10; // Get the last digit
            temp = Math.floor(temp / 10); // Remove the last digit
    }
    num = digitSum; // Replace num with the digit sum
  }
  return num; // Return the single digit
}
console.log(addDigits(num))
