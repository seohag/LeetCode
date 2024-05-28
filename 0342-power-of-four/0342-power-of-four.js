/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function(n) {
    while (n && n % 4 === 0) {
	    n /= 4;
    }
    
    if (n === 1) {
        return true;
    } else {
        return false
    }
};

