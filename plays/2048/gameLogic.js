import TransformGrid from './transformGrid';

const addCell = (grid, props) => {
  // Don't add cell if there was no transformation
  if (JSON.stringify(grid) === JSON.stringify(props.grid)) {
    return {
      score: 0,
      best: props.best,
      grid: props.grid,
      transform: grid
    };
  }

  const score = props.score + calcScore(props.grid, grid);

  if (score > props.best) {
    props.setBest(score);
  }

  props.setScore(score);
  props.setGridState(TransformGrid.addRandomCell(grid));

  return {
    score,
    best: props.best,
    grid: props.grid,
    transform: grid
  };
};

const getCellCount = (arr) => {
  let result = {};

  for (let i = 0, len = arr.length; i < len; i++) {
    if (!result[arr[i]]) {
      result[arr[i]] = 1;
    } else {
      result[arr[i]]++;
    }
  }

  return result;
};

const calcScore = (preGrid, postGrid) => {
  let preFlatten = preGrid.flat().filter(Boolean),
    postFlatten = postGrid.flat().filter(Boolean),
    preCount = getCellCount(preFlatten),
    postCount = getCellCount(postFlatten),
    keys = Object.keys(postCount),
    score = 0;

  for (let i = 0, len = keys.length; i < len; i++) {
    let preValue = preCount[keys[i]] || 0;

    if (postCount[keys[i]] > preValue) {
      const multiplier = postCount[keys[i]] - preValue;
      score += parseInt(keys[i], 10) * multiplier;
    }
  }

  return score;
};

const hasNoMovesLeft = (grid) => {
  let result = [];

  result.push(JSON.stringify(TransformGrid.shiftUp(grid)) === JSON.stringify(grid));
  result.push(JSON.stringify(TransformGrid.shiftLeft(grid)) === JSON.stringify(grid));
  result.push(JSON.stringify(TransformGrid.shiftDown(grid)) === JSON.stringify(grid));
  result.push(JSON.stringify(TransformGrid.shiftRight(grid)) === JSON.stringify(grid));

  return result.every((x) => x === true);
};

const has2048 = (grid) => {
  return grid.flat().some((x) => x >= 2048);
};

const gameLogic = {
  addCell: addCell,
  hasNoMovesLeft: hasNoMovesLeft,
  has2048: has2048,
  calcScore: calcScore
};

export default gameLogic;
