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
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
    if (!root) {
        return;
    }

    const result = [];
    
    if (root.left === null && root.right === null) {
        if (!result.length) {
            return [""+ root.val];
        } else {
            return root.val;
        }
    } else {
        if (root.left) {
            binaryTreePaths(root.left).forEach((el) => {
                result.push(root.val + "->" + el);
            });
        }
        
        if (root.right) {
            binaryTreePaths(root.right).forEach((el) => {
               result.push(root.val + "->" + el); 
            });
        }
    }
        
    return result;
};