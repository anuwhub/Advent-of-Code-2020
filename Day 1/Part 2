let nums = document.querySelectorAll('pre')[0].innerText.split("\n").map(x=>+x);
nums.pop();
for(let i=0; i<nums.length; i++){
    for(let j=i+1; j<nums.length; j++){
        for(let k=j+i; k<nums.length; k++){
            let add = nums[i]+nums[j]+nums[k];
            if(add==2020){
                console.log(nums[i]*nums[j]*nums[k]);
                break;
            }
        }
    }
}
