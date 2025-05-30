/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const set = new Set([...nums]);

  const missingNumber = [];
  for (let i = 1; i < nums.length + 1; i++) {
    // const element = set[i];
    if (!set.has(i)) {
      missingNumber.push(i);
    }
  }

  //   console.log(set, n);
  return missingNumber;
};

// const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const nums = [1, 1];
console.log(findDisappearedNumbers(nums));
