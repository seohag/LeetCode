/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    const romanArray = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" },
    ];
    
    if (isNaN(num)) {
        return "";
    }
    
    
    let romanNumeral = "";
    
    for (let i = 0; i < romanArray.length; i++) {
        while (num >= romanArray[i].value) {
            romanNumeral += romanArray[i].numeral;
            num -= romanArray[i].value;
        }
    }
    
    return romanNumeral;
};