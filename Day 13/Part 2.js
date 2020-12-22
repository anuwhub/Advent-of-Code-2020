let input = document.querySelectorAll('pre')[0].innerText.split('\n')[1].split(',').map(x=>+x);
let buses = [];
for(let e in input){
    if(!isNaN(input[e])){
        buses[e] = input[e];
    }
}

let jumpLen = buses[0];
let currBus = buses.slice(0).findIndex(x=>x);
let nextBus = buses.slice(1).findIndex(x=>x)+1
let t=0;
while(currBus != buses.length-1){
    t += jumpLen;
    if((t+nextBus)%buses[nextBus] == 0){
        jumpLen *= buses[nextBus];
        currBus = nextBus;
        nextBus = buses.slice(nextBus+1).findIndex(x=>x)+nextBus+1;
    }
}
console.log(t);
