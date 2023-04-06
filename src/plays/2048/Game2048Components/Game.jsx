import React, { useState } from 'react';
import Grid from './Grid';
import TranformGrid from '../transformGrid';

function Game(props) {
  const [grid, setGrid] = useState(grids);

  function grids() {
    let _grid = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null]
    ];

    _grid = TranformGrid.addRandomCell(_grid);
    _grid = TranformGrid.addRandomCell(_grid);

    return _grid;
  }

  const handleGrid = (grid) => setGrid(grid);

  return (
    <div className="game_wrapper">
      <Grid
        best={props.best}
        grid={grid}
        score={props.score}
        setBest={props.setBest}
        setGridState={handleGrid}
        setScore={props.setScore}
        setStatus={props.setStatus}
        status={props.status}
      />
    </div>
  );
}

export default Game;
