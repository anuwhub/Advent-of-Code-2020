let input = document.querySelectorAll('pre')[0].innerText.split('\n');
input.pop();

let dir = 90;
let x = 0;
let y = 0;
for(let e in input){
    if(input[e][0] == 'R') dir = (dir + +input[e].slice(1))%360;
    if(input[e][0] == 'L') dir = (((dir - +input[e].slice(1))%360)+360)%360;
    if(input[e][0] == 'N') y += +input[e].slice(1);
    if(input[e][0] == 'S') y -= +input[e].slice(1);
    if(input[e][0] == 'E') x += +input[e].slice(1);
    if(input[e][0] == 'W') x -= +input[e].slice(1);
    if(input[e][0] == 'F'){
        x += +Math.sin(dir*Math.PI/180).toFixed()*input[e].slice(1);
        y += +Math.cos(dir*Math.PI/180).toFixed()*input[e].slice(1);
    }
}

console.log(Math.abs(x) + Math.abs(y));
