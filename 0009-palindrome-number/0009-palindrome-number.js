/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    return x === Number(x.toString().split("").reverse().join(""));
};