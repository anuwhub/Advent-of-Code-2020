let input = document.querySelectorAll('pre')[0].innerText.split('\n').map(x=>+x);
input.pop();
input.sort((a,b)=>(a-b));
input.unshift(0);
input.push(input[input.length-1]+3);
let table = [];

function count(i){
    if(typeof table[i] != 'undefined'){
        return table[i];
    }
    if(i==input.length-1){
        table[i]=1;
        return 1;
    }
    let total = 0;
    for(let j=i+1; input[j]-input[i] <= 3; j++){
        total+=count(j);
    }
    table[i] = total;
    return total;
}

console.log(count(0));
