function possibleAddresses(address){
    let replacements = [...address.join('').matchAll(/X/g)];
    let combinations = [];
    let possibleCombos = [];

    for(let i=0; i<Math.pow(2, replacements.length); i++){
        combinations.push(i.toString(2).padStart((replacements.length), '0'));
    }
    
    for(let c in combinations){
        let newComb = address.slice(0);
        for(let r in replacements){
            newComb[replacements[r].index]=combinations[c][r];
        }
        possibleCombos.push(newComb.join(''));
    }

    return possibleCombos;
}


let input = document.querySelectorAll('pre')[0].innerText.split('\n').map(x=>x.split(' = '));
input.pop();

let mask = 0;
let mem = [];
for(let e in input){
    if(input[e][0] == 'mask'){
        mask = input[e][1];
    } else {
        let address = (+input[e][0].match(/[0-9]/g).join('')).toString(2).padStart(36, '0').split('');
        for(let n in address){
            if(mask[n]!='0') address[n] = mask[n];
        }
        let addresses = possibleAddresses(address);
        for(let a in addresses){
            mem[parseInt(addresses[a],2)] = +input[e][1]
        }
    }
}

let total=0;
for(let e in mem){
    total+=mem[e];
}
console.log(total);
