/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const numberObj = {};
    
    nums.forEach((num) => {
        if (!numberObj[num]) {
            numberObj[num] = 1;
        } else {
            numberObj[num]++;
        }
    });
    
    const numberCount = Math.max(...Object.values(numberObj));
    
    for (const number in numberObj) {
        if (numberObj[number] === numberCount) {
            return number;
        }
    }
};
