/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (((p && q) && (p.val != q.val)) 
        || ((p && !q) || (!p && q))) {
        return false;
    }

    if ((!p && !q)
        ||(!p.left && !q.left && !p.right && !q.right)) {
        return true;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};