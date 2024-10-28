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
    
    const createBST = (arr) => {
        if (arr.length <= 0) {
            return null;
        }
        const mid = Math.floor(arr.length / 2);
        const newNode = new TreeNode(arr[mid]);
        const left = createBST(arr.slice(0, mid));
        const right = createBST(arr.slice(mid + 1, arr.length));
        newNode.left = left;
        newNode.right = right;
        return newNode;
    }
    
    const mid = Math.floor(nums.length / 2);
    const newNode = new TreeNode(nums[mid]);
    const left = createBST(nums.slice(0, mid));
    const right = createBST(nums.slice(mid + 1, nums.length));
    newNode.left = left;
    newNode.right = right;

    return newNode;
};
