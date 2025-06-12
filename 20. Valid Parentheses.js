/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s.length) return false;

  // Paretheses
  const hashMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = [];
  let count = 0;

  while (count < s.length) {
    const parentheses = s[count];
    const close = hashMap[parentheses];

    // Open
    if (close) {
      // Add the close parentheses to the stack
      stack.push(close);
    } else {
      // Match the close paretheses to the last stack
      if (stack.pop() !== parentheses) return false;
    }

    count++;
  }

  return stack.length === 0;
};

// Input: s = "()";
Output: true;

// Input: s = "()[]{}";
Output: true;

// Input: s = "(]";
Output: false;

// Input: s = "([])";
Output: true;

Input: s = "([)]"; // priority (
Output: false;

console.log(isValid(s));
