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
const isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    
    const leftSubTree = root.left;
    const rightSubTree = root.right;
    
    function checkFunction(leftSubTree, rightSubTree) {
       if (leftSubTree === null && rightSubTree === null) {
           return true;
       }
        
       if (leftSubTree === null || rightSubTree === null) {
           return false;
       } 
       
       if (leftSubTree.val !== rightSubTree.val) {
           return false;
       }
       
       return (leftSubTree.val === rightSubTree.val) && checkFunction(leftSubTree.left, rightSubTree.right) && checkFunction(leftSubTree.right, rightSubTree.left);
    }
    
    return checkFunction(root.left, root.right);
};