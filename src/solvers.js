/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

window.findSolution = function(board, row, n, condition, cb) {
  board = board || new Board({n:n});
  if (row === n) return cb(board);
  for (var i = 0; i < n; i++) {
    board.togglePiece(row, i);
    if (!board[condition]()) {
      var value = findSolution(board, row + 1, n, condition, cb);
      if (value) return value;
    }
    board.togglePiece(row, i);
  }
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = [];
  solution = findSolution(undefined, 0, n, 'hasAnyRooksConflicts', board => board.rows());

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  findSolution(undefined, 0, n, 'hasAnyRooksConflicts', () => {solutionCount++});

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({n:n});
  solution = findSolution(undefined, 0, n, 'hasAnyQueensConflicts', board => board.rows()) || solution.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  findSolution(undefined, 0, n, 'hasAnyQueensConflicts', () => {solutionCount++});

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
