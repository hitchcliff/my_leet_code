import twoSum from "./1. Two Sums";

/// 1. Two Sum
test("Two Sum", () => {
  expect(twoSum([2, 5, 5, 11], 10)).toEqual(expect.arrayContaining([1, 2]));
  expect(twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
});
