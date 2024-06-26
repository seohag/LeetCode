/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
    let sum = 0;
    let up = 0;
    const result = [];
    
    if (num1.length > num2.length) {
        [num1, num2] = [num2, num1];
    }
    
    for (let i = num1.length; i < num2.length; i++) {
        num1 = "0" + num1;
    }
    
    for (let i = num2.length - 1; i >= 0; i--) {
        sum = up + Number(num1[i]) + Number(num2[i]);
        
        if (sum >= 10) {
            up = 1;
            result.push(sum - 10);
        } else {
            up = 0;
            result.push(sum);
        }
    }
    
    if (up) {
        result.push("1");
    }
    
    return result.reverse().join("");
};
    