/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    if (s.length < 2) {
        return false;
    }
    
    let pattern = "";
    
    for (let i = 0; i < s.length / 2; i++) {
        pattern += s[i];
        if (!s.replaceAll(pattern, "")) {
            return true;
        }
    }
    
    return false;
};
