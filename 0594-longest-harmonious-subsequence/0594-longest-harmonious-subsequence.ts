function findLHS(nums: number[]): number {
    const frequencyMap: { [key: number]: number } = {};
    
    for (const num of nums) {
        if (frequencyMap[num] !== undefined) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }
    
    let longest = 0;
    
    for (const key in frequencyMap) {
        const currentNum = Number(key);
        
        if (frequencyMap[currentNum + 1] !== undefined) {
            const currentLength = frequencyMap[currentNum] + frequencyMap[currentNum + 1];
            longest = Math.max(longest, currentLength);
        }
    }
    
    return longest;
};
