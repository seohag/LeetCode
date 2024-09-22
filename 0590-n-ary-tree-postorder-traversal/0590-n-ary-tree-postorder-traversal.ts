/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
  const result: number[] = [];

    const helperFunction = (node: Node | null) => {
        if (!node) {
            return;
        }
        
        for (const child of node.children) {
            helperFunction(child);
        }
        
        result.push(node.val);
    };

    helperFunction(root);

    return result;
};