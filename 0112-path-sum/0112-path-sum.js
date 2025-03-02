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
    const check = (node, sum) => {
        if (!node) {
            return false
        }
        if (!node.left && !node.right) {
            return node.val + sum === targetSum
        }
        return check(node.left, sum + node.val) 
        || check(node.right, sum + node.val)
    }
    return check(root, 0)
};