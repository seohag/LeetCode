/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const numsObject = {};
    
    nums.map((num) => {
        if (numsObject[num]) {
            numsObject[num]++;
        } else {
            numsObject[num] = 1;
        }
    });
    
    const result = nums.find((num) => numsObject[num] === 1);
    
    return result;
};