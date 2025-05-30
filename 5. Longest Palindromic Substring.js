// https://www.youtube.com/watch?v=fhD2pdqAt4s

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = [0, 1];

  for (let i = 0; i < s.length; i++) {
    const even = getDrome(i - 1, i, s);
    const odd = getDrome(i - 1, i + 1, s);
    const curMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd;

    max = curMax[1] - curMax[0] > max[1] - max[0] ? curMax : max;
    console.log(even, odd, max);
  }

  function getDrome(left, right, s) {
    while (left >= 0 && right < s.length) {
      if (s[left] !== s[right]) break;

      left--;
      right++;
    }

    return [left + 1, right];
  }

  return s.slice(max[0], max[1]);
};

const s = "babad";
console.log(longestPalindrome(s));
