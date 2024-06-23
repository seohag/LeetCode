/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
    let result = 0;
    
    const sortedG = g.sort((a, b) => a - b);
    const sortedS = s.sort((a, b) => a - b);
    
    for (let i = sortedG.length - 1; i >= 0; i--) {
        if (sortedG[i] <= sortedS[sortedS.length - 1]) {
            result++;
            sortedS.pop();
        }
    }
    
    return result;
};
