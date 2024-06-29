/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
    let answer = 0;
    let maxNumber = Math.max(x, y);
    
    while (maxNumber) {
        let c1 = x & 1;
        let c2 = y & 1;
        
        if (c1 != c2) {
          answer += 1; 
        }
            
        maxNumber = maxNumber >> 1;
        x = x >> 1;
        y = y >> 1;
    }
    
    return answer;
};
