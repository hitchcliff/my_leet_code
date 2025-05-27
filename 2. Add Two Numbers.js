/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode();
  let cur = dummy;

  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== null) {
    v1 = l1.val ? l1 : 0;
    v2 = l2.val ? l2 : 0;

    // total value
    let val = v1 + v2 + carry;

    // only the remainder
    carry = val / 10;

    // only the ones place #15 = 1
    val = val % 10;

    // assign the value
    cur.next = new ListNode(val);

    // update pointers
    cur = cur.next;
    l1 = l1.next ? l1 : null;
    l2 = l2.next ? l2 : null;
  }

  console.log(cur);
  return dummy.next;
};

const node1 = new ListNode(2); // Node with value 2 and next pointing to null
const node2 = new ListNode(4); // Node with value 4 and next pointing to null
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

const node4 = new ListNode(5); // Node with value 2 and next pointing to null
const node5 = new ListNode(6); // Node with value 4 and next pointing to null
const node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;

const l1 = node1;
const l2 = node4;

addTwoNumbers(l1, l2);
