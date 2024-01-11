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
var maxAncestorDiff = function(root) {

    let maxDiff = -Infinity;

    const dfs = (node, min, max) => {
        if (!node) {
            maxDiff = Math.max(maxDiff, Math.abs(max - min));
            return;
        }
        min = Math.min(min, node.val);
        max = Math.max(max, node.val);
        dfs(node.left, min, max);
        dfs(node.right, min, max);
    };

    dfs(root, root.val, root.val);

    return maxDiff;
};