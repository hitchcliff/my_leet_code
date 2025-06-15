/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];

    if (num + i >= goal) {
      goal = i;
    }

    console.log(num + i, num, i);
  }

  return goal === 0;
};

const nums = [2, 3, 1, 1, 4];
// Output: true

// const nums = [3, 2, 1, 0, 4];
// Output: false

// const nums = [2, 0, 0];
// Output: true

// const nums = [2, 5, 0, 0];
// Output: true

console.log(canJump(nums));
