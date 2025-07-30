/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
 let j=0 ; 
   while( j<nums.length){
    let i=0;
    while(i<nums.length && nums[i]!=j ){
        i++;
    }
    if(j!=nums[i]){
        return j; 
    }else{j++;}
   }
  
    return j;
};