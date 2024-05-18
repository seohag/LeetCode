/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    
    for (let i = 0; i < sortedNums.length; i++) {
        if (i !== nums[i]) {
            return i;
        }
    }
    
    return sortedNums.length;
};
