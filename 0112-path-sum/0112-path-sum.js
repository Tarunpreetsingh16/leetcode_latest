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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    return isPathPresent(root, targetSum, 0)
};

const isPathPresent = (node, targetSum, sumTillNow) => {
    if (!node) {
        return false
    }
    sumTillNow += node.val
    if (!node.left && !node.right) {
        return sumTillNow === targetSum
    }
    return isPathPresent(node.left, targetSum, sumTillNow) || 
        isPathPresent(node.right, targetSum, sumTillNow)
}