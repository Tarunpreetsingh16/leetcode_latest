/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1 || !list2) return list1 ?? list2

    const dummy = new ListNode()
    let tail = dummy

    while (list1 && list2) {
        const val1 = list1.val, val2 = list2.val
        let nextNode = null
        if (val1 < val2) {
            nextNode = list1
            list1 = list1.next
            
        }
        else {
            nextNode = list2
            list2 = list2.next
        }
        tail.next = nextNode
        tail = tail.next
        tail.next = null
    }

    if (list1 || list2) {
        tail.next = list1 ?? list2
    }
    return dummy.next
};