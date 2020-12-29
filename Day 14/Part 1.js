let input = document.querySelectorAll('pre')[0].innerText.split('\n').map(x=>x.split(' = '));
input.pop();

let mask = 0;
let mem = [];
for(let e in input){
    if(input[e][0] == 'mask'){
        mask = input[e][1];
    } else {
        let nums = (+input[e][1]).toString(2).padStart(36, '0').split('');
        for(let n in nums) if(mask[n]!='X') nums[n] = mask[n];
        mem[input[e][0].match(/[0-9]/g).join('')] = parseInt(nums.join(''), 2);
    }
}

console.log(mem.reduce((a,b)=>a+b));
