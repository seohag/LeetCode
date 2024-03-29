/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanObj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const currentRoman = romanObj[s[i]];
        const nextRoman = romanObj[s[[i + 1]]];
        
        if (nextRoman && currentRoman < nextRoman) {
            result -= currentRoman;
        } else {
            result += currentRoman;
        }
    }
    
    return result;
};