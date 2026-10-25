const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const q = parseInt(data[0]);

// Write your solution here.
// Read q operation lines, each starting with one of: push <val>,
// pop, peek, empty. Implement a FIFO queue using ONLY two stacks
// (push always goes to "in"; pop/peek transfer everything from
// "in" to "out" ONLY when "out" is empty, then operate on "out").
// Print one line of output for each "pop", "peek", or "empty" call.
  let inStack = []
  let outStack = []
for (let i = 0; i < q; i++) {
  const parts = data[1 + i].split(' ');
  // parse "parts" into an operation name and its arguments here
  let operation = parts[0];
  let value = parts[1];
  

  if(operation === "push"){
     inStack.push(value);
  }

  if(outStack.length === 0) {
    while(inStack.length > 0){
      outStack.push(inStack.pop())
    }
  }

  if(operation === "pop"){
    console.log(outStack.pop())
  }

  if(operation === "peek"){
    console.log(outStack[outStack.length - 1 ])
  }
  if(operation === "empty" ){
    let isEmpty = inStack.length === 0 && outStack.length === 0;
   console.log(isEmpty);  
  }

}
