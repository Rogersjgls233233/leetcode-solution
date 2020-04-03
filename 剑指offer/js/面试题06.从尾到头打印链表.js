// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
var reversePrint = function(head) {
  let arr = [];
  let a = head;
  while (a !== null) {
    arr.unshift(a.val);
    a = a.next;
  }
  return arr;
};
