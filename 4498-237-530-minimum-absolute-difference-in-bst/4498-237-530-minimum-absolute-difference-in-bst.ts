/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    let prev: number | null = null;
    let minDiff = Infinity;

    const inOrderTraversal = (node: TreeNode | null) => {
        if (!node) return;

        inOrderTraversal(node.left);

        if (prev !== null) {
            minDiff = Math.min(minDiff, Math.abs(node.val - prev));
        }

        prev = node.val;

        inOrderTraversal(node.right);
    };

    inOrderTraversal(root);

    return minDiff;
};
