import React, { useState } from "react";
import Grid from "./Grid";
import TranformGrid from "../transformGrid";

function Game(props) {
  const [grid, setGrid] = useState(() => {
    let _grid = [
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null]
    ];

    _grid = TranformGrid.addRandomCell(_grid);
    _grid = TranformGrid.addRandomCell(_grid);

    return _grid;
  });

  return (
    <div className="game">
      <Grid
        grid={grid}
        setGridState={setGrid}
        score={props.score}
        setScore={props.setScore}
        best={props.best}
        setBest={props.setBest}
        status={props.status}
        setStatus={props.setStatus}
      />
    </div>
  );
}

export default Game;
