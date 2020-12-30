let inp = document.getElementsByClassName('puzzle-input')[0].innerText.split(',').map(x=>+x);
let input = Array(30000000);
let turn;
let currVal;
for(let e in inp){
    turn = +e+1;
    currVal = inp[e];
    input[currVal] = turn;
}

while(turn<30000000){
    if(input[currVal] != undefined){
        let temp = turn-input[currVal];
        input[currVal] = turn;
        currVal = temp;
    } else {
        input[currVal] = turn;
        currVal = 0;
    }
    turn++;
}
console.log(currVal);
