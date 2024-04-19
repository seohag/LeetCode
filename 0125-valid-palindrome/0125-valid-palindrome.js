/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    if (s.length === 0) {
        return true;
    }
    
    s = s.toLowerCase();
    let index = 0
    let j = s.length - 1;
    
    while (index < j) {
        if ((s[index] < "a" || s[index] > "z") && (s[index] < "0" || s[index] > "9")) {
            index++;
            continue;
        }
        
        if ((s[j] < "a" || s[j] > "z") && (s[j] < "0" || s[j] > "9")) {
            j--;
            continue;
        }
        
        if (s[index] !== s[j]) {
            return false;
        }
        
        index++;
        j--;  
    }
    
    return true;
};

