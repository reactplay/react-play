const shiftLeft = (arr) => {
  const result = arr.filter(Boolean).concat([null, null, null, null]).slice(0, 4);

  for (let i = 0, len = arr.length; i < len; i++) {
    if (result[i] && result[i + 1] && result[i] === result[i + 1]) {
      result[i] *= 2;
      result[i + 1] = null;
    }
  }

  return result.filter(Boolean).concat([null, null, null, null]).slice(0, 4);
};

const shiftRight = (arr) => {
  arr = arr.filter((i) => i != null);
  let arrLen = arr.length - 1;
  let result = [];

  for (let i = arrLen; i > 0; i--) {
    if (arr[i] && arr[i - 1] && arr[i] === arr[i - 1]) {
      arr[i] *= 2;
      arr[i - 1] = null;
    }
  }

  result = [null, null, null, null].concat(arr.filter((i) => i != null));
  result = result.slice(result.length - 4);

  return result;
};

const gridFunction = (grid, func) => {
  for (let i = 0; i < 4; i++) {
    func(grid[i]);
  }
};

const addRandomCell = (grid) => {
  const availableCells = getAvailableCells(grid);
  const availableCellsLength = availableCells.length;

  if (!availableCellsLength) {
    return grid;
  }

  const randomCell = availableCells[Math.floor(Math.random() * availableCellsLength)];
  const randomNumber = Math.random() < 0.9 ? 2 : 4;

  grid[randomCell.row][randomCell.col] = randomNumber;

  return grid;
};

const getAvailableCells = (grid) => {
  let result = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] == null) {
        result.push({ row: i, col: j });
      }
    }
  }

  return result;
};

const display = {
  self: (g) => {
    gridFunction(g, () => {});
  },
  shiftLeft: (g) => {
    gridFunction(g, (i) => shiftLeft(i));
  },
  shiftRight: (g) => {
    gridFunction(g, (i) => shiftLeft(i));
  }
};

const transformGrid = {
  display: display,
  shiftLeft: (g) => {
    let grid = [];

    gridFunction(g, function (i) {
      grid.push(shiftLeft(i));
    });

    return grid;
  },
  shiftRight: (g) => {
    let grid = [];

    gridFunction(g, function (i) {
      grid.push(shiftRight(i));
    });

    return grid;
  },
  rotateRight: (grid) => {
    const result = [
      [grid[3][0], grid[2][0], grid[1][0], grid[0][0]],
      [grid[3][1], grid[2][1], grid[1][1], grid[0][1]],
      [grid[3][2], grid[2][2], grid[1][2], grid[0][2]],
      [grid[3][3], grid[2][3], grid[1][3], grid[0][3]]
    ];

    return result;
  },
  rotateLeft: (grid) => {
    let result = [
      [grid[0][3], grid[1][3], grid[2][3], grid[3][3]],
      [grid[0][2], grid[1][2], grid[2][2], grid[3][2]],
      [grid[0][1], grid[1][1], grid[2][1], grid[3][1]],
      [grid[0][0], grid[1][0], grid[2][0], grid[3][0]]
    ];

    return result;
  },
  shiftUp: (grid) => {
    let result = [];

    result = transformGrid.rotateLeft(grid);
    result = transformGrid.shiftLeft(result);
    result = transformGrid.rotateRight(result);

    return result;
  },
  shiftDown: (grid) => {
    let result = [];

    result = transformGrid.rotateRight(grid);
    result = transformGrid.shiftLeft(result);
    result = transformGrid.rotateLeft(result);

    return result;
  },
  addRandomCell: (grid) => {
    return addRandomCell(grid);
  },
  getAvailableCells: (grid) => {
    return getAvailableCells(grid);
  }
};

export default transformGrid;
