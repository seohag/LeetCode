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
const countNodes = function(root) {
    if (!root) {
        return 0;
    }
    
    const leftNodes = countNodes(root.left);
    const rightNodes = countNodes(root.right);
    
    return 1 + leftNodes + rightNodes;
};