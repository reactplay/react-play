import './DrawingPanel.css';
import { useState } from 'react';
import {CirclePicker} from "react-color";
import Row from '../row/Row';

function DrawingPanel() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [selectedColor, setColor] = useState('#4caf50');

  function changeColor(color) {
    setColor(color.hex);
  }

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
      <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      <div>{getRows()}</div>
    </div>
  );
}

export default DrawingPanel;
