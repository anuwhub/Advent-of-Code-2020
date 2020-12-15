input = document.querySelectorAll('pre')[0].innerText.split('\n').map(x=>+x);
input.pop();

for(let i=0; i<input.length-25; i++){
    let isFound = false;
    for(let j=i; j<i+25; j++){
        for(let k=j+1; k<i+25; k++){
            let add = input[j]+input[k];
            if(add == input[i+25]){
                isFound = true;
                continue;
            }
        }
        if(isFound){
            continue;
        }
    }
    if(!isFound){
        console.log(input[i+25]);
        break;
    }
}
