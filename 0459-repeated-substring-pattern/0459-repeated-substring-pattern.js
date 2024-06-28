/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    for (let i = 1; i < s.length; i++) {
        const pattern = s.slice(0, i);
        let isRepeated = true;
        
        for (let j = i; j < s.length; j += pattern.length) {
            const cmp = s.slice(j, j + pattern.length);
            
            if (pattern !== cmp) {
                isRepeated = false;
                break;
            }
        }
        
        if (isRepeated) {
            return true;
        }
    }
    
    return false;
};
