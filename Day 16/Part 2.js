// parse the data
let input = document.querySelectorAll('pre')[0].innerText.split('\n\n').map(x=>x.split('\n'));
let fields = input[0].map(x=>x.split(':')[0]);
let rules = input[0].map(x=>x.split(': ')[1].split(' or ').map(x=>x.split('-')));
input[2].shift();
let tickets = input[2].map(x=>(x.split(',').map(x=>+x)));
let myTicket = input[1][1].split(',').map(x=>+x);

// collect invalid tickets
let invalidTickets = [];
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
            invalidTickets.push(t);;
        }
    }
}

// remove invalid tickets from list of tickets
for(let t in invalidTickets){
    tickets[invalidTickets[t]] = undefined;
}

// get list of possible fields for each rule
let possibleFields = [];
let indices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
for(let r in rules){
    possibleFields.push(indices.slice());
    for(let t in tickets){
        for(let f in tickets[t]){
            if(!(tickets[t][f]>=rules[r][0][0] && tickets[t][f]<=rules[r][0][1] || tickets[t][f]>=rules[r][1][0] && tickets[t][f]<=rules[r][1][1])){
                possibleFields[r][f] = undefined;
            }
        }
    }
}

// confirm the field of each rule
let fieldsConfirmed = [];
for(let r in rules){
    for(let f in possibleFields){
        if(possibleFields[f].filter(x=>x!=undefined).length-1 == r){
            fieldsConfirmed[f] = possibleFields[f].filter(x=>x!=undefined).filter(x=>!fieldsConfirmed.includes(x))[0];
        }
    }
}

// multiply departure fields
let total = 1;
for(let i=0; i<6; i++){
    total*=myTicket[fieldsConfirmed[i]];
}
console.log(total);
