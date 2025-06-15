var twoSum = function (nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (diff in hashMap) {
      return [i, hashMap[diff]];
    }

    hashMap[num] = i;
  }
};

// const nums = [2, 11, 7, 15];
// const target = 9;

// function twoSums(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     const cur = nums[i];
//     const x = target - cur;

//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === x) {
//         console.log(x, [i, j]);
//         return [i, j];
//       }
//     }
//   }
// }

export default twoSum;
