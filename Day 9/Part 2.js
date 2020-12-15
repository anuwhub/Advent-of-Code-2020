input = document.querySelectorAll('pre')[0].innerText.split('\n').map(x=>+x);
input.pop();

function findRange(goal){
    for(let e in input){
        let endIndex = e;
        let runningTotal = 0;
        while(runningTotal<goal){
            runningTotal+=input[endIndex];
            if(runningTotal == goal){
                let elements = input.slice(e,endIndex+1)
                return elements;
            }
            endIndex++;
        }
    }
}

let range = findRange(goal);
console.log(Math.max(...range) + Math.min(...range));
