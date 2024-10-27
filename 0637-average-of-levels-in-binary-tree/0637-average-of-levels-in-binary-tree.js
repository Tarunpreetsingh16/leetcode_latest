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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let nodes = [];
    nodes.push(root);

    const result = [];

    while (nodes.length > 0) {
        const newNodes = [];
        let totalSum = 0;
        const totalNodes = nodes.length;

        while (nodes.length > 0) {
            const node = nodes.pop();
            node.left ? newNodes.push(node.left) : null;
            node.right ? newNodes.push(node.right) : null;
            totalSum += node.val;
        }
        nodes = [...newNodes];
        result.push(totalSum/totalNodes)
    }

    return result;
};