function maximumProduct(nums: number[]): number {
    const sortedArray = nums.sort((a, b) => a - b);
    
    const product1 = sortedArray[sortedArray.length - 1] * sortedArray[sortedArray.length - 2] * sortedArray[sortedArray.length - 3];

    const product2 = sortedArray[0] * sortedArray[1] * sortedArray[sortedArray.length - 1];

    return Math.max(product1, product2);
};
