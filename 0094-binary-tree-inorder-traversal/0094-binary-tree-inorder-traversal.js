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
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    const result = [];
    
    function checkFunction(nodes) {
        if (!nodes) {
            return result;
        }
        
        checkFunction(nodes.left);
        result.push(nodes.val);
        checkFunction(nodes.right);
        
        return nodes;
    }
    
    checkFunction(root);
    
    
    return result;
};