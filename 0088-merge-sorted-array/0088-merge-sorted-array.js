/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    if (!nums2.length) {
        return;
    }
    
    for (let i = 0; i < nums1.length; i++) {
        if (i >= m) {
            nums1[i] = nums2[i - m];
        }
    }
    
    return nums1.sort((a, b) => a - b); 
};