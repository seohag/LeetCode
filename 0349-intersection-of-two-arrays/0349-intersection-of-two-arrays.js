/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    
    const result = [];
    
    set1.forEach((el) => {
        if (set2.has(el)) {
            result.push(el);
        }
        
        return result;
    });
    
    return result;
};
