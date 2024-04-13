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
 * @return {boolean}
 */
const isBalanced = function(root) {
    if (!root) {
        return 1;
    }
    
    const leftDepth = isBalanced(root.left);
    const rightDepth = isBalanced(root.right);
    
    if (leftDepth === false || rightDepth === false) {
        return false;
    }
    
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return false;
    }
    
    return Math.max(leftDepth, rightDepth) + 1;
};