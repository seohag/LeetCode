/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
const preorder = function(root) {
    const result = [];
    
    function traverse(node) {
        if (node === null) {
            return;
        }
        
        result.push(node.val);
        
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i]);
        }
    }
    
    traverse(root);
    
    return result;
};
