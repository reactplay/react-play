import React from 'react';
import {
  FaPen,
  FaEraser,
  FaSquare,
  FaCircle,
  FaArrowRight,
  FaFont,
  FaUndo,
  FaRedo,
  FaTrash,
  FaDownload,
  FaFilePdf
} from 'react-icons/fa';

const Toolbar = ({
  tool,
  setTool,
  color,
  setColor,
  lineWidth,
  setLineWidth,
  fillColor,
  setFillColor,
  fontSize,
  setFontSize,
  onUndo,
  onRedo,
  onClear,
  onExportImage,
  onExportPDF,
  canUndo,
  canRedo
}) => {
  const tools = [
    { id: 'pen', icon: <FaPen />, label: 'Pen' },
    { id: 'eraser', icon: <FaEraser />, label: 'Eraser' },
    { id: 'line', icon: <FaArrowRight />, label: 'Line' },
    { id: 'rectangle', icon: <FaSquare />, label: 'Rectangle' },
    { id: 'circle', icon: <FaCircle />, label: 'Circle' },
    { id: 'text', icon: <FaFont />, label: 'Text' }
  ];

  return (
    <div className="toolbar">
      <div className="toolbar-section">
        <h3 className="toolbar-title">Tools</h3>
        <div className="tool-buttons">
          {tools.map((t) => (
            <button
              className={`tool-btn ${tool === t.id ? 'active' : ''}`}
              key={t.id}
              title={t.label}
              onClick={() => setTool(t.id)}
            >
              {t.icon}
            </button>
          ))}
        </div>
      </div>

      <div className="toolbar-section">
        <h3 className="toolbar-title">Colors</h3>
        <div className="color-controls">
          <div className="control-group">
            <label>Stroke</label>
            <input
              className="color-picker"
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label>Fill</label>
            <input
              className="color-picker"
              type="color"
              value={fillColor}
              onChange={(e) => setFillColor(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="toolbar-section">
        <h3 className="toolbar-title">Size</h3>
        {tool === 'text' ? (
          <div className="control-group">
            <label>Font Size: {fontSize}px</label>
            <input
              className="slider"
              max="72"
              min="12"
              type="range"
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
            />
          </div>
        ) : (
          <div className="control-group">
            <label>Width: {lineWidth}px</label>
            <input
              className="slider"
              max="20"
              min="1"
              type="range"
              value={lineWidth}
              onChange={(e) => setLineWidth(Number(e.target.value))}
            />
          </div>
        )}
      </div>

      <div className="toolbar-section">
        <h3 className="toolbar-title">Actions</h3>
        <div className="action-buttons">
          <button className="action-btn" disabled={!canUndo} title="Undo (Ctrl+Z)" onClick={onUndo}>
            <FaUndo />
          </button>
          <button className="action-btn" disabled={!canRedo} title="Redo (Ctrl+Y)" onClick={onRedo}>
            <FaRedo />
          </button>
          <button className="action-btn danger" title="Clear All" onClick={onClear}>
            <FaTrash />
          </button>
        </div>
      </div>

      <div className="toolbar-section">
        <h3 className="toolbar-title">Export</h3>
        <div className="export-buttons">
          <button className="export-btn" title="Export as PNG" onClick={onExportImage}>
            <FaDownload /> PNG
          </button>
          <button className="export-btn" title="Export as PDF" onClick={onExportPDF}>
            <FaFilePdf /> PDF
          </button>
        </div>
      </div>

      <div className="toolbar-section">
        <div className="keyboard-shortcuts">
          <h4>Shortcuts</h4>
          <ul>
            <li>
              <kbd>Ctrl+Z</kbd> Undo
            </li>
            <li>
              <kbd>Ctrl+Y</kbd> Redo
            </li>
            <li>
              <kbd>Del</kbd> Clear
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
