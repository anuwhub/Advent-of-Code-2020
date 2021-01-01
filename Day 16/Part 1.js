let input = document.querySelectorAll('pre')[0].innerText.split('\n\n').map(x=>x.split('\n'));
let rules = input[0].map(x=>x.split(': ')[1].split(' or ').map(x=>x.split('-')));
input[2].shift();
let tickets = input[2].map(x=>(x.split(',').map(x=>+x)));

let total=0;
for(let t in tickets){
    let validTicket = true;
    for(let f in tickets[t]){
        let foundMatch = false;
        for(let r in rules){
            if(tickets[t][f]>=rules[r][0][0] && tickets[t][f]<=rules[r][0][1] || tickets[t][f]>=rules[r][1][0] && tickets[t][f]<=rules[r][1][1]){
                foundMatch = true;
            }
        }
        if(!foundMatch){
            total += tickets[t][f];
        }
    }
}
console.log(total);
