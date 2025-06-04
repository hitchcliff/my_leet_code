/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {};

const head = [1, 2, 3, 4];
// Output: [1,4,2,3]

reorderList(head);
