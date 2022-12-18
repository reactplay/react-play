import React from 'react';
import Cell from './Cell';

function GridRow(props) {
  return (
    <div className="twenty-forty-eight-row">
      <Cell label={props.row[0]} />
      <Cell label={props.row[1]} />
      <Cell label={props.row[2]} />
      <Cell label={props.row[3]} />
    </div>
  );
}

export default GridRow;
