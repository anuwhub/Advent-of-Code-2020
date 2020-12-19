function findNeighbours(a, r, c){
    let dirs = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
    let neighbours = [];
    for(let d in dirs){
        let scale = 1;
        let seat = a[r + dirs[d][0]*scale]?.[c + dirs[d][1]*scale];
        while(seat == '.'){
            scale++;
            seat = a[r + dirs[d][0]*scale]?.[c + dirs[d][1]*scale];
        }
        neighbours.push(seat);
    }
    return neighbours;
}

let inp = document.querySelectorAll('pre')[0].innerText.split('\n');
inp.pop();
let input = [];

while(!inp.every((x,i)=>(x==input[i]))){
    input = inp.slice();
    for(let r=0; r<input.length; r++){
        let row = [...input[r]];
        for(let c=0; c<input[r].length; c++){
            let neighbours = findNeighbours(input, r, c);
            if(input[r][c]=='L' && neighbours.filter(x=>x=='#').length==0){
                row[c] = '#';
            }
            if(input[r][c]=='#' && neighbours.filter(x=>x=='#').length>=5){
                row[c] = 'L';
            }
        }
        inp[r] = row.join('');
    }
}

let total = 0;
for(let e in input){
    total += input[e].match(/#/g)?.length || 0;
}
console.log(total);
