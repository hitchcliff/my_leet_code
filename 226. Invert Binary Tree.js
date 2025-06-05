/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function ArrayToTreeNode(arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const tns = [root];
  for (let i = 1; i < arr.length; i += 2) {
    const tn = tns.shift();
    tn.left = new TreeNode(arr[i]);
    tn.right = new TreeNode(arr[i + 1]);
    tns.push(tn.left);
    tns.push(tn.right);
  }
  return root;
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

let root = [4, 2, 7, 1, 3, 6, 9];
root = ArrayToTreeNode(root);
// Output: [4,7,2,9,6,3,1]

// const root = [2,1,3]
// Output: [2,3,1]

console.log(invertTree(root));
