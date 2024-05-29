/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    const vowelString = "aeiouAEIOU";
    const vowels = [];
    const result = [];
    
    for (let i = 0 ; i < s.length; i++) {
        if (vowelString.includes(s[i])) {
            vowels.push(s[i]);
        }
        
        result.push(s[i]);
    }
    
    for (let i = 0; i < result.length; i++) {
        if (vowelString.includes(result[i])) {
            result[i] = vowels.pop();
        }
    }
    
    return result.join("");
};
