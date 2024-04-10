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
const maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    const stack = [[root, 1]];
    let result = 1;
    
    while (stack.length) {
        const [node, depth] = stack.pop();
        
        if (node) {
            result = Math.max(result, depth);
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }
    
    return result;
};