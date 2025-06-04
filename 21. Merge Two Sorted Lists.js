/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

class ListNode {
  constructor(val, next = null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function linkedList(array) {
  return array.reduce((acc, curr) => new ListNode(curr, acc), null);
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

  console.log(
    dummy.next.val,
    dummy.next.next.val,
    dummy.next.next.next.val,
    dummy.next.next.next.next.val,
    dummy.next.next.next.next.next.val,
    dummy.next.next.next.next.next.next.val
  );
  return dummy.next;
};

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
// Output: [1,1,2,3,4,4]

const l1 = linkedList(list1);
const l2 = linkedList(list2);

// const list1 = [], list2 = []
// Output: []

// const list1 = [], list2 = [0]
// Output: [0]

mergeTwoLists(l1, l2);
