/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int countNodes(TreeNode node) {
        if (node == null) return 0;
        int leftHeight = calculateLeftSkewedHeight(node);
        int rightHeight = calculateRightSkewedHeight(node);
        return leftHeight == rightHeight ? 
            (int) Math.pow(2, leftHeight + 1) - 1 :
            countNodes(node.left) + countNodes(node.right) + 1;
    }

    public int calculateLeftSkewedHeight(TreeNode node) {
        int count = 0;
        while (node.left != null) {
            count++;
            node = node.left;
        }
        return count;
    }

    public int calculateRightSkewedHeight(TreeNode node) {
        int count = 0;
        while (node.right != null) {
            count++;
            node = node.right;
        }
        return count;
    }
}