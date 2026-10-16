const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const s = data[0];

function validParenthesis(s){

    let stack = [];

    let pairs = {
        ")":"(",
        "}":"{",
        "]":"[",
    }

    for(let c of s){
        if("({[".includes(c)){
            stack.push(c);    
        } else{
            if(stack.length === 0 ||  stack.pop() !== pairs[c]  ){
                return false;
            }
        }
    }

    return stack.length === 0;


}



console.log(validParenthesis(s))
    


