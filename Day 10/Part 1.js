let input = document.querySelectorAll('pre')[0].innerText.split('\n').map(x=>+x);
input.pop();
input.sort((a,b)=>(a-b));
input.unshift(0);
input.push(input[input.length-1]+3);

let oneDiff = 0;
let threeDiff = 0;
for(let i=0; i<input.length-1; i++){
    let diff = input[i+1]-input[i];
    if(diff == 1){
        oneDiff++;
    }
    if(diff == 3){
        threeDiff++;
    }
}
console.log((oneDiff) * (threeDiff));
