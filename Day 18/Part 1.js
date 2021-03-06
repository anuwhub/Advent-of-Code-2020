function compute(x){
    x = x.substring(1, x.length-1);
    values = x.split(/[^0-9]/g).map(x=>+x);
    transformations = x.split(/[0-9]+/g).filter(x=>x);
    let total = values[0];
    for(let i=0; i<transformations.length; i++){
        if(transformations[i]=='+') total+= values[i+1];
        if(transformations[i]=='*') total*= values[i+1];
    }
    return total;
}

let input = document.querySelectorAll('pre')[0].innerText.split('\n').map(x=>x.replaceAll(" ", ""));
input.pop();

let total = 0;
for(let i=0; i<input.length; i++){
    let expression = input[i];
    
    let groups = expression.match(/\([^(]*?\)/g);
    while(groups){
        for(let ex in groups){
            expression = expression.replaceAll(groups[ex], compute(groups[ex]));
        }
        groups = expression.match(/\([^(]*?\)/g);
    }
    total += compute('('+expression+')');
}
