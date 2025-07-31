/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        nums[index] = -Math.abs(nums[index]);
    }

    const output = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            output.push(i + 1);
        }
    }

    return output;
};
