/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
    const result = [];
    
    while (columnNumber > 0) {
        const numberToCharacter = columnNumber % 26;
        
        if (numberToCharacter === 0) {
            result.push("Z");
            columnNumber = Math.floor(columnNumber / 26) - 1;
        } else {
            result.push(String.fromCharCode((numberToCharacter - 1) + "A".charCodeAt(0)));
            columnNumber = Math.floor(columnNumber / 26);
        }
    }
    
    return result.reverse().join("");
};
