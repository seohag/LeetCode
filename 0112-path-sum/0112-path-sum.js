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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
    if (!root) {
        return false;
    }
    
    const pathSum = targetSum - root.val;
    
    if (root.left === null && root.right === null) {
        if (pathSum === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    return hasPathSum(root.left, pathSum) || hasPathSum(root.right, pathSum);
};