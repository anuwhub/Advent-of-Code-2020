let inp = document.querySelectorAll('pre')[0].innerText.split('\n');
inp.pop();
let input = [];

while(!inp.every((x,i)=>(x==input[i]))){
    input = inp.slice();
    for(let r=0; r<input.length; r++){
        let row = [...input[r]];
        for(let c=0; c<input[r].length; c++){
            let neighbours = [input[r-1]?.[c-1], input[r-1]?.[c], input[r-1]?.[c+1], input[r]?.[c-1], input[r]?.[c+1], input[r+1]?.[c-1], input[r+1]?.[c], input[r+1]?.[c+1]];
            if(input[r][c]=='L' && neighbours.filter(x=>x=='#').length==0){
                row[c] = '#';
            }
            if(input[r][c]=='#' && neighbours.filter(x=>x=='#').length>=4){
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
