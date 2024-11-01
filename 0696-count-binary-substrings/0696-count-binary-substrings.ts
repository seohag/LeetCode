function countBinarySubstrings(s: string): number {
    let result = 0;
    let prevGroupLength = 0;
    let currentGroupLength = 1;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currentGroupLength += 1;
        } else {
            result += Math.min(prevGroupLength, currentGroupLength);
            prevGroupLength = currentGroupLength;
            currentGroupLength = 1;
        }
    }
    
    result += Math.min(prevGroupLength, currentGroupLength);
    
    return result;
};
