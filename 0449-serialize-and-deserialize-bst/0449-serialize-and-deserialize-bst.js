/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
    const result = [];
    
    function dfs(node) {
        if (!node) {
            result.push("N");
            return;
        }
        
        result.push(node.val.toString());
        dfs(node.left);
        dfs(node.right);
    }
    
    dfs(root);

    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
    const array = data.split(",");
    let index = 0
    
    function dfs() {
        if (array[index] === "N") {
            index++;
            return null
        }
        
        const node = new TreeNode(Number(array[index]));
        index++;
        node.left = dfs();
        node.right = dfs();
        
        return node;
    }
    
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
