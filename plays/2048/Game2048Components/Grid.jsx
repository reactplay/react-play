import React, { useEffect } from 'react';
import Row from './Row';
import TransformGrid from '../transformGrid';
import GameLogic from '../gameLogic';

function Grid(props) {
  function handleKey(e) {
    e.preventDefault();

    if (props.status !== 'running' && props.status !== 'continue') return;
    let result = {};

    switch (e.key) {
      case 'ArrowUp':
        result = GameLogic.addCell(TransformGrid.shiftUp(props.grid), props);

        break;
      case 'ArrowRight':
        result = GameLogic.addCell(TransformGrid.shiftRight(props.grid), props);

        break;
      case 'ArrowDown':
        result = GameLogic.addCell(TransformGrid.shiftDown(props.grid), props);

        break;
      case 'ArrowLeft':
        result = GameLogic.addCell(TransformGrid.shiftLeft(props.grid), props);

        break;
      default:
    }

    if (props.status !== 'continue' && GameLogic.has2048(result.transform)) {
      props.setStatus('won');
    }

    if (GameLogic.hasNoMovesLeft(result.transform)) {
      props.setStatus('over');
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [handleKey]);

  return (
    <div className="twenty-forty-eight-grid">
      <Row row={props.grid[0]} />
      <Row row={props.grid[1]} />
      <Row row={props.grid[2]} />
      <Row row={props.grid[3]} />
    </div>
  );
}

export default Grid;
