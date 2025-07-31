/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
let M = new Set();
for(let num of nums){
  if(M.has(num)){
    return true;}
 M.add(num);
}
return false;
};