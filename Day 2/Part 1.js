let input = document.querySelectorAll('pre')[0].innerText.split("\n").map(x=>x.split(" "));
input.pop();
let goodPwCount = 0;
for(let i=0; i<input.length; i++){
    let conditionals = input[i][0].split('-').map(x=>+x);
    let conditionalCount = ((input[i][2]).match(new RegExp(input[i][1][0], 'g')) || []).length;
    if((conditionals[0] <= conditionalCount) && (conditionals[1] >= conditionalCount)){
        goodPwCount++;
    }
}
console.log(goodPwCount);
