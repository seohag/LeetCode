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
const findMode = function(root) {
    if(!root) {
        return [];
    }
    
    let max = 0;
    const map = {};
    const modes = [];
    
    function inorder(node) {
        if (!node) {
            return;
        }
        
        inorder(node.left);
        
        map[node.val] = (map[node.val] || 0) + 1;
        max = Math.max(max, map[node.val]);
        
        inorder(node.right);
    }
    
    inorder(root);
    
    for (const key in map) {
        if (map[key] === max) {
            modes.push(Number(key));
        }
    }
    
    return modes;
};
