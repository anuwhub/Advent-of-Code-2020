let input = document.querySelectorAll('pre')[0].innerText.split('\n');
input.pop();

let dest = [10,1];
let pos = [0,0];
for(let e in input){
    if(input[e][0] == 'R'){
        let tempX = Math.cos(+input[e].slice(1)*Math.PI/180).toFixed()*dest[0] + Math.sin(+input[e].slice(1)*Math.PI/180).toFixed()*dest[1];
        let tempY = -Math.sin(+input[e].slice(1)*Math.PI/180).toFixed()*dest[0] + Math.cos(+input[e].slice(1)*Math.PI/180).toFixed()*dest[1];
        dest[0] = tempX;
        dest[1] = tempY;
    }
    if(input[e][0] == 'L'){
        let tempX = Math.cos(+input[e].slice(1)*Math.PI/180).toFixed()*dest[0] - Math.sin(+input[e].slice(1)*Math.PI/180).toFixed()*dest[1];
        let tempY = Math.sin(+input[e].slice(1)*Math.PI/180).toFixed()*dest[0] + Math.cos(+input[e].slice(1)*Math.PI/180).toFixed()*dest[1];
        dest[0] = tempX;
        dest[1] = tempY;
    }
    if(input[e][0] == 'N') dest[1] += +input[e].slice(1);
    if(input[e][0] == 'S') dest[1] -= +input[e].slice(1);
    if(input[e][0] == 'E') dest[0] += +input[e].slice(1);
    if(input[e][0] == 'W') dest[0] -= +input[e].slice(1);
    if(input[e][0] == 'F'){
        pos[0] += dest[0]*+input[e].slice(1);
        pos[1] += dest[1]*+input[e].slice(1);
    }
}

console.log(Math.abs(pos[0])+Math.abs(pos[1]));
