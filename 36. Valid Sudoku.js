/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const size = 9;

  let rows = new Set();
  let cols = new Set();
  let boxes = new Set();

  // Validate Rows
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[i][j] === ".") continue;

      if (rows.has(board[i][j])) return false;

      // Rows
      rows.add(board[i][j]);
    }

    rows = new Set();
  }

  // Validate Cols
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (board[j][i] === ".") continue;

      if (cols.has(board[j][i])) return false;

      // Cols
      cols.add(board[j][i]);
    }

    cols = new Set();
  }

  // Validate Boxes
  for (let i = 0; i < size; i++) {}

  return true;
};

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
Output: true;

// const board = [
//   [".", ".", ".", ".", "5", ".", ".", "1", "."],
//   [".", "4", ".", "3", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "3", ".", ".", "1"],
//   ["8", ".", ".", ".", ".", ".", ".", "2", "."],
//   [".", ".", "2", ".", "7", ".", ".", ".", "."],
//   [".", "1", "5", ".", ".", ".", ".", ".", "."],
//   [".", ".", ".", ".", ".", "2", ".", ".", "."],
//   [".", "2", ".", "9", ".", ".", ".", ".", "."],
//   [".", ".", "4", ".", ".", ".", ".", ".", "."],
// ];
Output: false;

console.log(isValidSudoku(board));
