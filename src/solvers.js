/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var solution = [];
  var board = new Board({n:n});
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      board.attributes[i][j] = 1;
      if (board.hasAnyRooksConflicts())
        board.attributes[i][j] = 0;
    }
    solution.push(board.get(i));
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var count = function(board = new Board({n:n}), currentRow = 0) {
    if (currentRow < n) {
      for (var col = 0; col < n; col++) {
        board.attributes[currentRow][col] = 1;
        currentRow++;
        if (!board.hasAnyRooksConflicts()) {
          count(board, currentRow);
        }
        currentRow--;
        board.attributes[currentRow][col] = 0;
      }
    } else {
      solutionCount++;
    }
  };
  count();

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var board = new Board({n:n});
  for (var col = 0; col < n; col++) {

  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;

  var count = function(board = new Board({n:n}), currentRow = 0) {
    if (currentRow < n) {
      for (var col = 0; col < n; col++) {
        board.attributes[currentRow][col] = 1;
        currentRow++;
        if (!board.hasAnyQueensConflicts()) {
          count(board, currentRow);
        }
        currentRow--;
        board.attributes[currentRow][col] = 0;
      }
    } else {
      solutionCount++;
    }
  };
  count();

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
