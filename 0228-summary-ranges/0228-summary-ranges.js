/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    const result = [];
    let start = nums[0];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            if (start === nums[i]) {
                result.push(nums[i].toString());
            } else {
                result.push(start + "->" + nums[i]);
            }
            
            start = nums[i + 1];
        }
    }
    
    
    return result;
};