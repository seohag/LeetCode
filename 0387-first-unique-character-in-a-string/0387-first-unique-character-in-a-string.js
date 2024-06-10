/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
    const result = {};
    
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        
        if (Object.keys(result).includes(character)) {
            let count = result[character];
            result[character] = count + 1;
        } else {
            result[character] = 1;
        }
    }
    
    for (character in result) {
        if (result[character] === 1) {
            return s.indexOf(character);
        }
    }
    
    return -1;
};
