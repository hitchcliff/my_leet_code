/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  // Wall technique
  const ans = [];

  const m = matrix.length;
  const n = matrix[0].length;

  let TOP_WALL = 0;
  let BOTTOM_WALL = m;
  let RIGHT_WALL = n;
  let LEFT_WALL = -1;

  let DIRECTION = "RIGHT";
  let i = 0;
  let j = 0;

  while (ans.length !== m * n) {
    if (DIRECTION === "RIGHT") {
      while (j < RIGHT_WALL) {
        ans.push(matrix[i][j]);
        j += 1;
      }
      i++;
      j--;
      RIGHT_WALL -= 1;
      DIRECTION = "DOWN";
    } else if (DIRECTION === "DOWN") {
      while (i < BOTTOM_WALL) {
        ans.push(matrix[i][j]);
        i += 1;
      }

      i -= 1;
      j -= 1;
      BOTTOM_WALL -= 1;
      DIRECTION = "LEFT";
    } else if (DIRECTION === "LEFT") {
      while (j > LEFT_WALL) {
        ans.push(matrix[i][j]);
        j--;
      }

      i--;
      j++;
      LEFT_WALL += 1;
      DIRECTION = "UP";
    } else {
      while (i > TOP_WALL) {
        ans.push(matrix[i][j]);
        i--;
      }

      i += 1;
      j += 1;
      TOP_WALL += 1;
      DIRECTION = "RIGHT";
    }
  }

  return ans;
};

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// Output: [1,2,3,6,9,8,7,4,5]

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
];
// Output: [1,2,3,4,8,12,16,20,24,23,22,21,17,13,9,5,6,7,11,15,19,18,14,10]

console.log(spiralOrder(matrix));
