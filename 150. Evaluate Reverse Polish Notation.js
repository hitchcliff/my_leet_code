/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const ans = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    // ans.push(token);
    if (token === "+") {
      const a = ans.pop();
      const b = ans.pop();
      ans.push(b + a);
    } else if (token === "*") {
      const a = ans.pop();
      const b = ans.pop();
      ans.push(b * a);
    } else if (token === "/") {
      const a = parseInt(ans.pop());
      const b = parseInt(ans.pop());
      ans.push(Math.trunc(b / a));
    } else if (token === "-") {
      const a = ans.pop();
      const b = ans.pop();
      ans.push(b - a);
    } else {
      ans.push(typeof Number(token) === "number" ? parseInt(token) : token);
    }
  }

  console.log(ans);

  return ans[0];
};

Input: tokens = ["2", "1", "+", "3", "*"];
// Input: tokens = ["2", "1", "+"];
Output: 9;
// Explanation: ((2 + 1) * 3) = 9

Input: tokens = ["4", "13", "5", "/", "+"];
Output: 6;
// Explanation: (4 + (13 / 5)) = 6

Input: tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
Output: 22;
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

console.log(evalRPN(tokens));
