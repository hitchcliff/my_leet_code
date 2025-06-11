/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  const set = new Set(nums);

  let longest = 0;

  for (const num of set) {
    // Check if it starts in the sequence
    if (!set.has(num - 1)) {
      length = 0;

      // Run this while num + length exists in the set
      while (set.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
};

Input: nums = [100, 4, 200, 1, 3, 2];
Output: 4;

// Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
Output: 9;

// Input: nums = [1,0,1,2]
Output: 3;

// Input: nums = [0];
// Input: nums = [0, 0];
// Input: nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];

console.log("Output: ", longestConsecutive(nums));
