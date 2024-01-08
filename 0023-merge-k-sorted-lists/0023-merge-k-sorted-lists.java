/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<ListNode> minQueue = new PriorityQueue<ListNode>(new MinNodeComparator());

        for (int i = 0; i < lists.length; i++) {
            ListNode head = lists[i];
            while (head != null) {
                minQueue.add(head);
                head = head.next;
            }
        }

        ListNode head = new ListNode();
        ListNode tail = head;

        while (!minQueue.isEmpty()) {
            tail.next = minQueue.poll();
            tail = tail.next;
            tail.next = null;
        }
        
        return head.next;
    }
}

public class MinNodeComparator implements Comparator<ListNode> {
    @Override
    public int compare(ListNode n1, ListNode n2) {
        return n1.val - n2.val;
    }
}