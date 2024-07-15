/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function(score) {
    const scoreCopy = score.slice();
    const scoreNums = {};
    
    scoreCopy.sort((a,b) => b - a);
    scoreCopy.forEach((num, index) => {
        scoreNums[num] = (index +1).toString();
        
        if (index === 0) {
            scoreNums[num] = "Gold Medal";
        }
        
        if (index === 1) {
            scoreNums[num] = "Silver Medal";
        }
        
        if (index === 2) {
            scoreNums[num] = "Bronze Medal";
        }
    });
    
    return score.map(val => {
        return scoreNums[val];
    });
};