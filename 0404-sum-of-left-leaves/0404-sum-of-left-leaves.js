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
const sumOfLeftLeaves = function(root) {
    let result = 0;
    
    function helperFunction(root) {
        if (root === null) {
            return;
        }
        
        if (root.left !== null && root.left.left === null && root.left.right === null) {
            result += root.left.val;
        }
        
        helperFunction(root.left);
        helperFunction(root.right);
    }
    
    
    helperFunction(root);
    
    return result;
};
