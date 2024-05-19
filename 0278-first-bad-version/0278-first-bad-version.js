/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
    return function(n) {
        if (n === 1) {
            return 1;
        }
        
        let left = 1;
        let right = n;
        let middle = 0;
        
        while (left < right) {
            middle = left + Math.floor((right - left) / 2);
            if (!isBadVersion(middle - 1) && isBadVersion(middle)) {
                return middle;
            }
            
            if (isBadVersion(middle)) {
                right = middle;
            } else {
                left = middle + 1;
            }
        }
        
        return left;
    };
};
