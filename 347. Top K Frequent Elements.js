/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let len = nums.length;

  const ans = [];
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in hashMap) {
      hashMap[num] += 1;
    } else {
      hashMap[num] = 1;
    }

    console.log(len);
    len--;
  }

  console.log(ans, hashMap, len);
};

const nums = [1, 2, 3, 2, 2, 3],
  k = 2;
// Output: [1,2]

// const nums = [1], k = 1
// Output: [1]

topKFrequent(nums, k);
