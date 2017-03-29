function shearMatrix(mt, x, y, z) {
  var shearMatrix = [
    [1, y, z, 0],
    [x, 1, z, 0],
    [x, y, 1, 0],
    [0, 0, 0, 1]
  ];
  var matrix = convertToMatrix(mt);
  var multiplied =  multiply(shearMatrix, matrix);
  var normalize = [];
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      normalize.push(multiplied[i][j]);
    }
  }
  return normalize
}

function multiply(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}

function convertToMatrix(mvMatrix) {
  var returnMatrix =  [];
  var temp = [];
  for (i = 0; i < mvMatrix.length; i++) {
    if ((i)%4 === 0) {
      if (temp.length !== 0) {
        returnMatrix.push(temp);
      }
      temp = [];
    }
    temp.push(mvMatrix[i]);
    if (i === mvMatrix.length -1) {
      returnMatrix.push(temp);
    }
  }
  return returnMatrix;
}