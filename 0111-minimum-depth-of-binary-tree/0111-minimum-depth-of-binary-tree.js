/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    if (!root.left && !root.right) {
        return 1;
    }
    
    const leftDepth = minDepth(root.left) + 1;
    const rightDepth = minDepth(root.right) + 1;
    
    if (!root.left) {
        return rightDepth;
    }
    
    if (!root.right) {
        return leftDepth;
    }
    
    return Math.min(leftDepth, rightDepth);
};