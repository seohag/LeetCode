/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    const set = new Set();
    
    function loopNum(value) {
        if (value === 1) {
            return true;
        }
        
        const splitNumber = value.toString().split("");
        const powNumber = splitNumber.reduce((acc, cur) => acc += Math.pow(Number(cur), 2), 0);
        
        if (set.has(powNumber)) {
            return false;
        }
        
        set.add(powNumber);
        
        return loopNum(powNumber);
    }
    
    return loopNum(n);
};