/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;
    
    let maxIndex = 0;
    
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }
    
    const root = new TreeNode(nums[maxIndex]);
    
    root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
    
    return root;
};
