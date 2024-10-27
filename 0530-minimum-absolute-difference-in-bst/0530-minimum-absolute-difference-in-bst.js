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
    let minDiff = Infinity;
    const arr = [];
    inorder(root, arr);
    return findMinDiff(arr);
};

const inorder = (node, arr) => {
    if (!node) return;
    inorder(node.left, arr);
    arr.push(node.val);
    inorder(node.right, arr);
}

const findMinDiff = (arr) => {
    let minDiff = Infinity;

    for (let i = 1; i < arr.length; i++) {
        minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }
    return minDiff;
}
