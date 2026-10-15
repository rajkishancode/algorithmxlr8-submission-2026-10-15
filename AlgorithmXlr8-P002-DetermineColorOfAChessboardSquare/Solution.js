const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const coordinates = data[0].trim();

// Write your solution here.
// Print "White" or "Black".
function squareIsWhite(coordinates){
    let board = []
for(let c = 0; c < 8; c++){
    let rowColors = []
    for(let r = 0; r < 8; r++){
        board.push((c + r) % 2 === 0 ? "Black":"White")

    }     
    board.push(rowColors)

    let col =   coordinates.charCodeAt(0) - "a1".charCodeAt(0)
    let row =   coordinates.charCodeAt(1) - 1

    return  (col + row) % 2 === 0 ? "Black":"White";
    
    
}
}

console.log(squareIsWhite(coordinates))

