/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const dfs = (node, leafNodes) => {
        if (!node) return leafNodes;
        if (!node.left && !node.right) {
            leafNodes.push(node.val);
            return leafNodes;
        }

        node.left && dfs(node.left, leafNodes);
        node.right && dfs(node.right, leafNodes);
        return leafNodes;
    };

    const leafNodesSeq1 = dfs(root1, []).join(',');
    const leafNodesSeq2 = dfs(root2, []).join(',');

    return leafNodesSeq1 === leafNodesSeq2;
};

