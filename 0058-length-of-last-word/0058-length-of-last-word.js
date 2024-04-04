/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    let totalLength = s.length;
    let result = 0;
    
    while (totalLength > 0) {
        totalLength--;
        
        if (s[totalLength] !== " ") {
            result++;
        } else if (result > 0) {
            return result;
        }
    }
    
    return result;
};