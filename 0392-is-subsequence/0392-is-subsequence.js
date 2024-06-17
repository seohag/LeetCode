/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function(s, t) {    
    if (s.length === 0) {
        return true;
    }

    let sPointer = 0;
    let tPointer = 0;

    while (sPointer < s.length && tPointer < t.length) {
        if(s[sPointer] === t[tPointer]) {
          sPointer++;  
        } 

        tPointer++;
    }

    return sPointer === s.length
};
