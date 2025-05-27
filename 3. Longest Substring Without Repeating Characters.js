/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function (s) {
//   let set = new Set();
//   let left = 0;
//   let maxSize = 0;

//   if (s.length === 0) return 0;
//   if (s.length === 1) return 1;

//   for (let i = 0; i < s.length; i++) {
//     console.log(set.has(s[i]));
//     while (set.has(s[i])) {
//       set.delete(s[left]);
//       left++;
//     }

//     set.add(s[i]);
//     maxSize = Math.max(maxSize, i - left + 1);
//   }

//   return maxSize;
// };

/// Fastest solution
var lengthOfLongestSubstring = function (s) {
  const obj = {};
  let maxLength = 0;

  if (s.length === 0) return 0;
  if (s.length === 1) return 1;

  // left = j;
  // right = i;
  for (let i = 0, j = 0; i < s.length; i++) {
    const current = s[i]; // this will be in the right

    // if(obj.inc)
    // obj[current] = i;
    // console.log(objKeys);
    const exist = Object.hasOwn(obj, current);

    if (exist && obj[current] >= j) {
      const lastFoundValue = obj[current];
      j = lastFoundValue + 1;
      console.log(lastFoundValue);
    }

    // console.log(checkIfAlreadyExist);
    maxLength = Math.max(maxLength, i - j + 1);
    obj[current] = i;
    // console.log(j);
  }

  console.log(obj, maxLength);
  // const foundValue = obj["k"];
  // console.log(foundValue);

  return maxLength;
};

const s = "abcabcabcd";
// const s = "pwwekew";
// const s = "pww";
lengthOfLongestSubstring(s);
