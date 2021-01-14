function getNeighbours(board, b, r, c){
    let neighbours = Array(27);
    for(let i=0; i<neighbours.length; i++){
        neighbours[i] = ((i).toString(3).padStart(3, '0').split('').map(x=>+x-1));
    }
    neighbours.splice(13,1);

    for(let n in neighbours){
        neighbours[n][0] += b;
        neighbours[n][1] += r;
        neighbours[n][2] += c;
    }

    let newNeighbours = Array(neighbours.length);
    for(let n in neighbours){
        newNeighbours[n] = board[neighbours[n][0]]?.[neighbours[n][1]]?.[neighbours[n][2]];
    }
    return newNeighbours;
}


let input = document.querySelectorAll('pre')[0].innerText.split('\n').map(x=>x.split(''));
input.pop();
let cycles = 6;
let board = Array(cycles*2+1);
// initialise all boards
for(let i=0; i<board.length; i++){
    board[i] = Array(input.length+cycles*2);
    for(let j=0; j<board[i].length; j++){
        board[i][j] = Array(input[0].length+cycles*2);
        for(let k=0; k<board[i][j].length; k++){
            board[i][j][k] = '.';
        }
    }
}

// set starting position for middle board
for(let i=0; i<board[cycles].length; i++){
    for(let j=0; j<board[cycles][i].length; j++){
        if(input[i-cycles]?.[j-cycles]){
            board[cycles][i][j] = input[i-cycles][j-cycles];
        } else {
            board[cycles][i][j] = '.';
        }
    }
}

// iterate through cycles, performing ruleset
for(let i=0; i<cycles; i++){
    let boardCopy = board.map(x=>x.map(x=>x.slice()));
    for(let b in board){
        for(let r in board[b]){
            for(let c in board[b][r]){
                let activeNeighbours = getNeighbours(boardCopy,+b,+r,+c).filter(x=>x=='#').length;
                if(boardCopy[b][r][c] == '.' && activeNeighbours == 3) board[b][r][c] = '#';
                if(boardCopy[b][r][c] == '#' && (activeNeighbours<2 || activeNeighbours>3)) board[b][r][c] = '.';
            }
        }
    }
}

// calculate end condition
let total = 0;
for(let b in board){
    for(let r in board[b]){
        for(let c in board[b][r]) total+= (board[b][r][c] == '#');
    }
}
console.log(total);
