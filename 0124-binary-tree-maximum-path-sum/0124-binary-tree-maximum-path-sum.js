/*
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    const findMaxSum = (node) => { 
        if (!node) return 0;
        const leftSubtreeMaxPathSum = findMaxSum(node.left);
        const rightSubtreeMaxPathSum = findMaxSum(node.right);
        const leftSum = leftSubtreeMaxPathSum + node.val;
        const rightSum = rightSubtreeMaxPathSum + node.val;
        const totalSum = leftSubtreeMaxPathSum + rightSubtreeMaxPathSum + node.val;

        maxSum = Math.max(maxSum, leftSum, rightSum, totalSum, node.val);
        return Math.max(node.val, leftSum, rightSum);
    };

    findMaxSum(root);
    return maxSum;
};