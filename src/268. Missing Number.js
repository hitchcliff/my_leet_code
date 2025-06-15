/**
 * @param {number[]} nums
 * @return {number}
 */

// G SUM
var missingNumber = function (nums) {
  const n = nums.length;
  const gSum = (n * (n + 1)) / 2;
  const nSum = nums.reduce((prev, current) => prev + current, 0);

  return gSum - nSum;
};

// Hash table
// var missingNumber = function (nums) {
//   const hashTable = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];

//     hashTable[num] = true;
//   }

//   for (let i = 0; i < nums.length + 1; i++) {
//     if (hashTable[i] !== true) return i;
//   }
// };

const input = [3, 0, 1];
console.log(missingNumber(input));
