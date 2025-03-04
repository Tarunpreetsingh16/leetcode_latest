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
var getMinimumDifference = function(root) {
    const inorderArr = []
    inorder(root, inorderArr)
    let min = Infinity
    for (let i = 1; i < inorderArr.length; i++) {
        min = Math.min(min, Math.abs(inorderArr[i] - inorderArr[i - 1]))
    }
    return min
};
const inorder = (node, arr) => {
    if (!node) return
    inorder(node.left, arr)
    arr.push(node.val)
    inorder(node.right, arr)
    return
}