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
 */
const BSTIterator = function(root) {
    this.queue = [];
    this.index = 0;
    this.node = root;
    
    function traverse(node, queue) {
        if (node === null) {
            return null;
        }
        
        traverse(node.left, queue);
        queue.push(node);
        traverse(node.right, queue);
    };
    
    traverse(root, this.queue);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.node = this.queue[this.index++];
    
    return this.node.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.index !== this.queue.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
