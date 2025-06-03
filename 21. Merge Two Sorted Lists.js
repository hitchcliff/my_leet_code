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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2;
      list2 = list2.next;
    } else {
      cur.next = list1;
      list1 = list1.next;
    }

    cur = cur.next;
  }

  if (list1) {
    cur.next = list1;
  } else {
    cur.next = list2;
  }

  console.log("LIST 1: ", list1);
  console.log("LIST 2: ", list2);
  console.log("CURRENT: ", cur);
  console.log("DUMMY: ", dummy.next);

  return dummy.next;
};

const list1 = [1, 2, 4];
const node1 = new ListNode(1); // Node with value 2 and next pointing to null
const node2 = new ListNode(2); // Node with value 4 and next pointing to null
const node3 = new ListNode(4);
node1.next = node2;
node2.next = node3;

const list2 = [1, 3, 4];
const node4 = new ListNode(1); // Node with value 2 and next pointing to null
const node5 = new ListNode(3); // Node with value 4 and next pointing to null
const node6 = new ListNode(4);
node4.next = node5;
node5.next = node6;
// Output: [1,1,2,3,4,4]

// const list1 = [], list2 = []
// Output: []

// const list1 = [], list2 = [0]
// Output: [0]

mergeTwoLists(node1, node4);
