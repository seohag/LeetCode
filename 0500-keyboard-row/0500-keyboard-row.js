/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function(words) {
    const row1 = "qwertyuiopQWERTYUIOP";
    const row2 = "asdfghjklASDFGHJKL";
    const row3 = "zxcvbnmZXCVBNM";
    
    function canBeTypedWithOneRow(word) {
        const firstLetter = word[0];
        let row;
        
        if (row1.includes(firstLetter)) {
            row = row1;
        } else if (row2.includes(firstLetter)) {
            row = row2;
        } else if (row3.includes(firstLetter)) {
            row = row3;
        } else {
            return false;
        }
        
        for (let i = 1; i < word.length; i++) {
            if (!row.includes(word[i])) {
                return false;
            }
        }
        
        return true;
    }
    
    return words.filter(canBeTypedWithOneRow);
};
