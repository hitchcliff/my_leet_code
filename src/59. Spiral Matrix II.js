/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  // create an array of matrix
  const ans = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  //  points
  let x = 0,
    y = 0;

  // directions
  let dx = 1,
    dy = 0;

  for (let i = 0; i < n * n; i++) {
    ans[y][x] = i + 1;

    const SIDE_WALL = 0 <= x + dx && x + dx < n;
    const TOP_BOTTOM_WALL = 0 <= y + dy && y + dy < n;

    if (!(SIDE_WALL && TOP_BOTTOM_WALL && ans[y + dy][x + dx] === 0)) {
      [dx, dy] = [-dy, dx];
    }

    x += dx;
    y += dy;
  }

  console.log(ans);

  return ans;
};

const n = 3;
// Output:
// [
//   [1,2,3],
//   [8,9,4],
//   [7,6,5]
// ]
generateMatrix(n);
