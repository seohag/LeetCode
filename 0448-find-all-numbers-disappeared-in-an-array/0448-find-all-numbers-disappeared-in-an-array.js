/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function(nums) {
    const sortedArray = nums.sort((a, b) => a - b);
    
    const result = [];
    let current = 1;
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        
        while (current < num) {
            result.push(current);
            current++;
        }
        
        if (current == num) {
            current++;
        }
    }
    
    while (current <= nums.length) {
        result.push(current);
        current++;
    }
    
    return result;
}
