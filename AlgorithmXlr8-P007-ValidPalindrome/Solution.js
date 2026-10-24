const s = require('fs').readFileSync(0, 'utf-8').replace(/\n$/, '');

// Write your solution here.
// Print "true" if s is a palindrome after lowercasing and removing all
// non-alphanumeric characters, otherwise print "false".

function isAlphanumeric(s){
    return /^[a-z0-9]$/i.test(s);
}

function isPalindrome(s){
 let left = 0;
 let right = s.length - 1;

    while(left < right){

        while(left < right && !isAlphanumeric(s[left]) ){
            left++;   
        }

        while(left < right && !isAlphanumeric(s[right])){
            right--;
        }
        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false;
        }
            left++;
            right--;
    }
    
    
    return true;
}



console.log(isPalindrome(s) ? true:false)