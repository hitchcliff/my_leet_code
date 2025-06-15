/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length <= 1) {
    return [strs];
  }

  const sortedArrays = strs.map((word) => word.split("").sort().join(""));
  const hashMap = {};

  for (let i = 0; i < sortedArrays.length; i++) {
    const sortedStr = sortedArrays[i];

    // Check if our hash has sorted string
    if (hashMap[sortedStr]) {
      hashMap[sortedStr].push(strs[i]);
    } else {
      hashMap[sortedStr] = [strs[i]];
    }
  }

  return Object.values(hashMap);
};

function hashStr(str) {
  const map = { ...str };
  return map;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// const strs = [""];
// Output: [[""]]

// const strs = ["a"];
// Output: [["a"]]

console.log(groupAnagrams(strs));
