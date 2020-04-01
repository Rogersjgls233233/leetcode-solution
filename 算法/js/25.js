/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let current = head;
  let count = 0;
  while (current != null && count != k) {
    current = current.next;
    count++;
  }
  if (count == k) {
    current = reverseKGroup(current, k);
    while (count != 0) {
      count--;
      let tmp = head.next;
      head.next = current;
      current = head;
      head = tmp;
    }
    head = current;
  }
  return head;
};
