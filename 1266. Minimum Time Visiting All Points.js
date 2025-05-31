// https://www.youtube.com/watch?v=3i7JVvaKX5M

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let res = 0;

  for (let i = 1; i < points.length; i++) {
    const xDiff = Math.abs(points[i][0] - points[i - 1][0]);
    const yDiff = Math.abs(points[i][1] - points[i - 1][1]);
    res += Math.max(xDiff, yDiff);
  }

  console.log(res);
  return res;
};

const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
// Output: 7
minTimeToVisitAllPoints(points);
