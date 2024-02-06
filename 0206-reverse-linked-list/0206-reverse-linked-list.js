/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*Iterative method by creating a new linked list*/
// var reverseList = function(head) {
//     if (!head || !head.next) return head

//     let newHead = new ListNode(head.val, null)

//     while (head.next) {
//         head = head.next
//         const newNode = new ListNode(head.val, newHead)
//         newHead = newNode
//     }

//     return newHead
// };

/*Recurssion method by creating a new linked list*/
var reverseList = function(head) { 
    if (!head || !head.next) return head
    const newHead = new ListNode()

    while (head) {
        const newNode = new ListNode(head.val, newHead.next)
        newHead.next = newNode
        head = head.next
    }
    return newHead.next
}

