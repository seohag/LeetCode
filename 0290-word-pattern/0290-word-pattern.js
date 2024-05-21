/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    const stringArray = s.split(" ");
    const patternArray = pattern.split("");
    
    if (stringArray.length !== patternArray.length) {
        return false
    }
    
    const patternMap = new Map();
    const stringSet = new Set();
    
    for (let i = 0; i < pattern.length; i++) {
        if (!patternMap.has(pattern[i]) && !stringSet.has(stringArray[i])) {
            patternMap.set(pattern[i], stringArray[i]);
            stringSet.add(stringArray[i]);
            continue;
        }
        
        if (patternMap.get(pattern[i]) !== stringArray[i]) {
            return false;
        }
    }

    return true;
};
