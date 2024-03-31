/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const bracketPairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    const stack = [];
    
    for (const char of s) {
        if (bracketPairs[char]) {
            stack.push(char);
        } else if (
            char === ")" ||
            char === "]" ||
            char === "}"
        ) {
            if (bracketPairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};