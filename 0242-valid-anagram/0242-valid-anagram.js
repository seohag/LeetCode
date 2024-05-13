/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const sortedStr1 = [...s].sort();
    const sortedStr2 = [...t].sort();
    
    for (let i = 0; i < sortedStr1.length; i++) {
        if (sortedStr1[i] === sortedStr2[i]) {
            continue;
        }
        
        if (sortedStr1[i] === sortedStr2[i + 1] && sortedStr1[i + 1] === sortedStr2[i]) {
            i++;
            continue;
        } else {
            return false;
        }
    }
    
    return true;
};
