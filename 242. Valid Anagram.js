/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sMap = generateHashMap(s);

  return matchHashMap(sMap, t);

  function matchHashMap(map, str) {
    for (let i = 0; i < str.length; i++) {
      const currentStr = str[i];

      if (currentStr in map && map[currentStr] !== 0) {
        map[currentStr] -= 1;
      } else {
        return false;
      }
    }

    return true;
  }

  function generateHashMap(str) {
    const map = {};

    for (let i = 0; i < str.length; i++) {
      const currentStr = str[i];

      if (currentStr in map) {
        map[currentStr] += 1;
      } else {
        map[currentStr] = 1;
      }
    }

    return map;
  }
};

// const s = "anagram";
// const t = "nagaram";
// Output: true

// const s = "rat";
// const t = "car";
// Output: false

const s = "aacc";
const t = "ccac";
// Output: false;
console.log(isAnagram(s, t));
