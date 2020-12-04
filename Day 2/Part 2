let input = document.querySelectorAll('pre')[0].innerText.split("\n").map(x=>x.split(" "));
input.pop();
let goodPwCount = 0;
for(let i=0; i<input.length; i++){
    let conditionals = input[i][0].split('-').map(x=>+x);
    let target = input[i][1][0];
    if((input[i][2][conditionals[0]-1] == target) ^ (input[i][2][conditionals[1]-1] == target)){
        goodPwCount++;
    }
}
console.log(goodPwCount);
