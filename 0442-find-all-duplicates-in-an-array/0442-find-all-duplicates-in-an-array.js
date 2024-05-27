/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    const numsObject = {};
    const result = [];
    
    nums.forEach((el) => {
        if (numsObject[el]) {
            result.push(el);
        } else {
            numsObject[el] = true;
        }
    });
    
    return result;
};
