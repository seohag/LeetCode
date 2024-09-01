/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function(nums) {
    if (nums.length === 1) {
        return [[], nums];
    }
    
    const answer = [[]];
    
    while (nums.length) {
        const num = nums.pop();
        
        const length = answer.length;
        
        for (let i = 0; i < length; i++) {
            answer.push([...answer[i], num]);
        }
    }
    
    return answer;
};
