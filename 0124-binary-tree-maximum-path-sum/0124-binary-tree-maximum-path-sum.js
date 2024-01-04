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
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    const findMaxSum = (node) => { 
        const leftSubtreeMaxPathSum = node.left ? findMaxSum(node.left) : null;
        const rightSubtreeMaxPathSum = node.right ? findMaxSum(node.right) : null;

        if (!rightSubtreeMaxPathSum && !leftSubtreeMaxPathSum) {
            maxSum = Math.max(node.val, maxSum);
            return node.val;
        }
        else if (leftSubtreeMaxPathSum && !rightSubtreeMaxPathSum) {
            maxSum = Math.max(maxSum, leftSubtreeMaxPathSum + node.val, node.val);
        } 
        else if (rightSubtreeMaxPathSum && !leftSubtreeMaxPathSum) {
            maxSum = Math.max(maxSum, rightSubtreeMaxPathSum + node.val, node.val);
        } 
        else if (rightSubtreeMaxPathSum && leftSubtreeMaxPathSum) {
            maxSum = Math.max(maxSum, 
                rightSubtreeMaxPathSum + leftSubtreeMaxPathSum + node.val,
                rightSubtreeMaxPathSum + node.val,
                leftSubtreeMaxPathSum + node.val,
                node.val);
        }

        return Math.max(node.val, 
            node.val + Math.max(
                leftSubtreeMaxPathSum ? leftSubtreeMaxPathSum : 0, 
                rightSubtreeMaxPathSum ? rightSubtreeMaxPathSum : 0));
    };

    findMaxSum(root);
    return maxSum;
};
