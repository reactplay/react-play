import './DrawingPanel.css';
import { useState, useRef } from 'react';
import { CirclePicker } from 'react-color';
import html2canvas from 'html2canvas';
import Row from '../row/Row';

function DrawingPanel() {
  const panelWidth = 16;
  const panelHeight = 16;
  const [selectedColor, setColor] = useState('#4caf50');
  const [rowsKey, setRowsKey] = useState(0);
  const printRef = useRef();

  function changeColor(color) {
    setColor(color.hex);
  }

  function getRows() {
    let rows = [];

    for (let i = 0; i < panelHeight; i++) {
      rows.push(<Row key={`${i}-${rowsKey}`} selectedColor={selectedColor} width={panelWidth} />);
    }

    return rows;
  }

  async function handleDownloadImage() {
    const element = printRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL('image/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'image.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  }

  function handleReset() {
    setRowsKey(rowsKey + 1);
  }

  return (
    <div className="drawingPanel">
      <h2>Create Pixel Art</h2>
      <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      <div ref={printRef}>{getRows()}</div>
      <div>
        <button className="saveArt" type="button" onClick={handleReset}>
          Reset
        </button>
        <button className="saveArt" type="button" onClick={handleDownloadImage}>
          Save
        </button>
      </div>
    </div>
  );
}

export default DrawingPanel;
