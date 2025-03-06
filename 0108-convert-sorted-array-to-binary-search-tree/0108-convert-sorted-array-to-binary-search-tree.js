/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const buildTree = (l, r) => {
        if (l > r) return
        const mid = Math.floor((l + r) / 2)
        return new TreeNode(
            nums[mid],
            buildTree(l, mid - 1),
            buildTree(mid + 1, r)
        )
    }
    return buildTree(0, nums.length - 1)
};