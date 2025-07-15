function getMax(nums:number[] ) {// htis is how we give array as a type 
    let maxValue = -1000;
    for(let i =0;i<nums.length;i++) {
        if(nums[i]>maxValue) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}

getMax([1,2,3])

interface Address  {
    
}