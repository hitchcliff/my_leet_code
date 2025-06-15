/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let lp = 0;
  rp = nums.length - 1;
  //   const ans = Array.from({ length: nums.length }, () => 0);
  const ans = Array.from({ length: nums.length }).fill(0);

  for (let i = nums.length - 1; i >= 0; i--) {
    const leftNum = nums[lp] * nums[lp];
    const rightNum = nums[rp] * nums[rp];

    if (leftNum > rightNum) {
      ans[i] = leftNum;
      lp++;
    } else {
      ans[i] = rightNum;
      rp--;
    }
  }

  //   console.log(ans);

  return ans;
};

const nums = [-4, -1, 0, 3, 10];
// Output: [0,1,9,16,100]

// const nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

console.log(sortedSquares(nums));
