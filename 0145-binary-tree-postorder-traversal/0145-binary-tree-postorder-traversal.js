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
const postorderTraversal = function(root) {
    const result = [];
    
    function dfs(root, result) {
        if (!root) {
            return;
        }
        
        dfs(root.left, result);
        dfs(root.right, result);
        result.push(root.val);
    }
    
    dfs(root, result);
    return result;
};