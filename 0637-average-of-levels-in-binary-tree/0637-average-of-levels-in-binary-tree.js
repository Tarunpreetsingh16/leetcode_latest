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
    const result = []
    const q = new Queue()

    q.enqueue(root)

    while (q.size() > 0) {
        let sum = 0, count = q.size()
        for (let i = 0; i < count; i++) {
            const node = q.dequeue()
            node.right && q.enqueue(node.right)
            node.left && q.enqueue(node.left)
            sum += node.val
        }
        result.push(sum / count)
    }

    return result
};