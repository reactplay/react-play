import './DrawingPanel.css';
import { useState } from 'react';
import Row from '../row/Row';

function DrawingPanel() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [selectedColor, setColor] = useState('#f44336');

  function getRows() {
    let rows = [];

    for (let i = 0; i < panelHeight; i++) {
      rows.push(<Row key={i} selectedColor={selectedColor} width={panelWidth} />);
    }

    return rows;
  }

  return (
    <div className="drawingPanel">
      <h2>Create Pixel Art</h2>
      <div>{getRows()}</div>
    </div>
  );
}

export default DrawingPanel;
