/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function(candyType) {
    const uniqueCandies = new Set(candyType).size;
    const maxCandiesAliceCanEat = candyType.length / 2;
    
    return Math.min(uniqueCandies, maxCandiesAliceCanEat);
};
