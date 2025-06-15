/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sp = 0,
    tp = 0;

  while (sp < s.length && tp < t.length) {
    if (s[sp] === t[tp]) {
      sp++;
    }

    tp++;
  }

  return sp === s.length;
};

// const s = "abc",
//   t = "ahbgdc";
// Output: true
const s = "axc",
  t = "ahbgdc";
// Output: false;

console.log(isSubsequence(s, t));
