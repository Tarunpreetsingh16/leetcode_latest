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
    let level = 1
    let totalForLevel = 0
    let numberOfNodesInLevel = 0
    let result = []

    const queue = new Queue()
    queue.enqueue({node: root, level})

    while (!queue.isEmpty()) {
        if (queue.front().level === level) {
            let element = queue.dequeue()
            let node = element.node

            if (node.left) queue.enqueue({node: node.left, level: element.level +1})
            if (node.right) queue.enqueue({node: node.right, level: element.level +1})

            totalForLevel += node.val
            numberOfNodesInLevel++

        }
        if (queue.isEmpty() || queue.front().level != level){
            result.push(totalForLevel / numberOfNodesInLevel)
            totalForLevel = 0
            numberOfNodesInLevel = 0
            if (!queue.isEmpty())
                level = queue.front().level
        }
    }
    return result
};