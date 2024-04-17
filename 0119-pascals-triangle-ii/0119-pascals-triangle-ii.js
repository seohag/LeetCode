/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {   
    const result = [1];
    
    for (let i = 1; i <= rowIndex; i++) {
        for (let j = result.length - 1; j > 0; j--) {
            result[j] = result[j - 1] + result[j];
        }
        
        result.push(1);
    }
    
    return result;
};