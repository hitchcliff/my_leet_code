/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  //   FORMULA to move the direction
  //   dx  = -dy, dy = dx

  const ans = [];

  //   points
  let x = 0,
    y = 0;

  // direction
  let dx = 1,
    dy = 0;

  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows * cols; i++) {
    ans.push(matrix[y][x]);
    matrix[y][x] = "."; // visited

    //   boundaries
    const SIDE_WALL = 0 <= x + dx && x + dx < cols;
    const TOP_BOTTOM_WALL = 0 <= y + dy && y + dy < rows;

    if (!(SIDE_WALL && TOP_BOTTOM_WALL) || matrix[y + dy][x + dx] === ".") {
      [dx, dy] = [-dy, dx];
    }

    x += dx;
    y += dy;
  }

  return ans;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: [1,2,3,6,9,8,7,4,5]

// const matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
//   [17, 18, 19, 20],
//   [21, 22, 23, 24],
// ];
// Output: [1,2,3,4,8,12,16,20,24,23,22,21,17,13,9,5,6,7,11,15,19,18,14,10]

console.log(spiralOrder(matrix));
