/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  if (nums.length <= 1) return nums;

  // 1. HASH MAP
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
  } // END

  // 2. Bucket sort
  const bucket = Array.from({ length: nums.length + 1 }, () =>
    Array.from(0).fill(0)
  );

  for (const num in hashMap) {
    const value = hashMap[num];

    bucket[value].push(parseInt(num));
  } // END

  // 3. Max-Heap
  const ans = [];

  for (let i = nums.length; i >= 0; i--) {
    for (const value of bucket[i]) {
      if (ans.length === k) return ans;

      ans.push(value);
    }
  } // END

  return ans;
};

const nums = [1, 2, 3, 2, 2, 3],
  k = 2;
// Output: [1,2]

// const nums = [1], k = 1
// Output: [1]

// const nums = [-1, -1];
// const k = 1;
// Output: [-1]

console.log(topKFrequent(nums, k));
