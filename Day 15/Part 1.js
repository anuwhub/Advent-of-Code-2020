let input = document.getElementsByClassName('puzzle-input')[0].innerText.split(',').map(x=>+x);

while(input.length<2020){
    let i = input.length-1;
    let diff = 0;
    for(let e=input.length-2; e>=0; e--){
        if(input[i]==input[e]){
            diff = i-e;
            break;
        }
    }
    input.push(diff);
}
console.log(input[2019]);
