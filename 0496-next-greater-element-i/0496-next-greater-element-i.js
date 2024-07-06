/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function(nums1, nums2) {
    const nextGreater = new Array(nums2.length).fill(-1);
    const stack = [];

    for (let i = 0; i < nums2.length; i++) {
        const num = nums2[i];

        while (stack.length > 0 && nums2[stack[stack.length - 1]] < num) {
            const index = stack.pop();
            nextGreater[index] = num;
        }

        stack.push(i);
    }

    const result = nums1.map(num => {
        const index = nums2.indexOf(num);

        return nextGreater[index];
    });

    return result;
};
