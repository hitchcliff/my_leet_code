class MinStack {
  constructor() {
    this.stack = [];
    this.sortedStack = [];
  }
  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.stack.push(val);

    if (
      this.sortedStack.length === 0 ||
      this.sortedStack[this.sortedStack.length - 1] >= val
    ) {
      this.sortedStack.push(val);
    }
  }
  /**
   * @return {void}
   */
  pop() {
    // Check if sorted stack and original stack is ===
    if (this.stack.pop() === this.sortedStack[this.sortedStack.length - 1]) {
      this.sortedStack.pop();
    }
  }
  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }
  /**
   * @return {number}
   */
  getMin() {
    // Get the min number
    // let min = Number.MAX_VALUE;
    // for (let i = 0; i < this.stack.length; i++) {
    //     const number = this.stack[i];
    //     min = Math.min(min, number);

    // }
    // // return min;

    console.log(this.sortedStack[this.sortedStack.length - 1]);
    return this.sortedStack[this.sortedStack.length - 1];
  }
}

const fn = [
  "MinStack",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "top",
  "getMin",
];
const values = [[], [-2], [0], [-3], [], [], [], []];

Output: [null, null, null, null, -3, null, 0, -2];

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top(); // return 0
minStack.getMin(); // return -2
