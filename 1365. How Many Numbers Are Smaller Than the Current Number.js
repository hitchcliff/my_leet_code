/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const temp = [...nums].sort((a, b) => a - b);

  //   dictionary
  const d = {};

  for (let i = 0; i < temp.length; i++) {
    const num = temp[i];

    if (!(num in d)) {
      d[num] = i;
    }
  }

  //   return
  const ret = [];

  for (const i of nums) {
    ret.push(d[i]);
  }

  return ret;
};

// const nums = [8, 1, 2, 2, 3];
// Output: [4,0,1,1,3]
const nums = [5, 0, 10, 0, 10, 6];
// Output: [2,0,4,0,4,3]

console.log(smallerNumbersThanCurrent(nums));
