/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const result = [];
    
    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2);
        
        let onesCount = 0;
        for (let j = 0; j < binary.length; j++) {
            if (binary[j] === "1") {
                onesCount += 1;
            }
        }
        
        result.push(onesCount);
    }
    
    return result;
};
