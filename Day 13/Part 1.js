let input = document.querySelectorAll('pre')[0].innerText.split('\n');
let time = +input[0];
let buses = input[1].split(',').map(x=>+x).filter(x=>!isNaN(x));

let bestBus = [Infinity];
for(let b in buses){
    if(buses[b]-time%buses[b] < bestBus[0]){
        bestBus[0] = buses[b]-time%buses[b];
        bestBus[1] = buses[b]
    }
}

console.log(bestBus[0] * bestBus[1]);
