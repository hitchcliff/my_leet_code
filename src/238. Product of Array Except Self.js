/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let pre = 1;

  const output = Array.from({ length: nums.length }).fill(1);

  // Loop start to end
  for (let i = 0; i < nums.length - 1; i++) {
    const num = nums[i];

    output[i + 1] = pre * num;
    pre = output[i + 1];
  }

  let pos = 1;

  // Loop end to start
  for (let i = nums.length - 1; i >= 0; i--) {
    const currentOutput = output[i];

    output[i] = pos * currentOutput;
    pos = pos * nums[i];
  }

  return output;
}

const nums = [1, 2, 3, 4];
Output: [24, 12, 8, 6];

// const nums = [-1, 1, 0, -3, 3];
Output: [0, 0, 9, 0, 0];

// const nums = [-1, -1, -1, -1, -1, -1, -1, -1];

productExceptSelf(nums);

/**
 * BRUTE FORCE
 */
// function productExceptSelf(nums) {
//   let p = 0;

//   const ans = [];

//   while (p < nums.length) {
//     let temp = 1;
//     let i = 0;

//     for (let i = 0; i < nums.length; i++) {
//       const num = nums[i];

//       if (i !== p) {
//         if (num === 0) {
//           temp = 0;
//         } else {
//           temp = temp * num;
//         }
//       }
//     }

//     ans.push(temp);
//     p++;
//   }

//   return ans;
// }
