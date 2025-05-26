// const nums = [2, 7, 11, 15];
// const nums = [3, 3];
const nums = [2, 5, 5, 11];
const target = 10;

twoSums(nums, target);

function twoSums(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const x = target - cur;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === x) {
        console.log(x, [i, j]);
        return [i, j];
      }
    }
  }
}
