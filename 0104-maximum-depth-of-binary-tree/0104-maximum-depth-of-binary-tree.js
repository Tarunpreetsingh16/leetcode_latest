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
var maxDepth = function(root) {
    if (!root) return 0;

    const findMaxDepth = (node, depth) => {
        if (!node) {
            return depth - 1;
        }
        return Math.max(
            depth, 
            findMaxDepth(node.left, depth + 1), 
            findMaxDepth(node.right, depth + 1))
    }

    return findMaxDepth(root, 1);
};