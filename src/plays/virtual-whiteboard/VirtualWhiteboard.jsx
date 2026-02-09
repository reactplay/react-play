import React, { useState, useRef, useCallback } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import LayerPanel from './components/LayerPanel';
import './styles.css';

function VirtualWhiteboard(props) {
  // Drawing state
  const [tool, setTool] = useState('pen');
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(2);
  const [fillColor, setFillColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(16);

  // Layer state
  const [layers, setLayers] = useState([
    { id: 1, name: 'Layer 1', visible: true, locked: false, data: [] }
  ]);
  const [activeLayerId, setActiveLayerId] = useState(1);

  // History state for undo/redo
  const [history, setHistory] = useState([]);
  const [historyStep, setHistoryStep] = useState(-1);

  // Refs
  const canvasRef = useRef(null);

  // Save state to history
  const saveToHistory = useCallback(() => {
    const newHistory = history.slice(0, historyStep + 1);
    newHistory.push(JSON.parse(JSON.stringify(layers)));
    setHistory(newHistory);
    setHistoryStep(newHistory.length - 1);
  }, [history, historyStep, layers]);

  // Undo
  const handleUndo = useCallback(() => {
    if (historyStep > 0) {
      setHistoryStep(historyStep - 1);
      setLayers(JSON.parse(JSON.stringify(history[historyStep - 1])));
    }
  }, [historyStep, history]);

  // Redo
  const handleRedo = useCallback(() => {
    if (historyStep < history.length - 1) {
      setHistoryStep(historyStep + 1);
      setLayers(JSON.parse(JSON.stringify(history[historyStep + 1])));
    }
  }, [historyStep, history]);

  // Layer management
  const addLayer = () => {
    const newLayer = {
      id: Date.now(),
      name: `Layer ${layers.length + 1}`,
      visible: true,
      locked: false,
      data: []
    };
    setLayers([...layers, newLayer]);
    setActiveLayerId(newLayer.id);
  };

  const deleteLayer = (layerId) => {
    if (layers.length === 1) return; // Keep at least one layer
    const newLayers = layers.filter((layer) => layer.id !== layerId);
    setLayers(newLayers);
    if (activeLayerId === layerId) {
      setActiveLayerId(newLayers[0].id);
    }
  };

  const toggleLayerVisibility = (layerId) => {
    setLayers(
      layers.map((layer) => (layer.id === layerId ? { ...layer, visible: !layer.visible } : layer))
    );
  };

  const toggleLayerLock = (layerId) => {
    setLayers(
      layers.map((layer) => (layer.id === layerId ? { ...layer, locked: !layer.locked } : layer))
    );
  };

  const renameLayer = (layerId, newName) => {
    setLayers(layers.map((layer) => (layer.id === layerId ? { ...layer, name: newName } : layer)));
  };

  // Update layer data
  const updateLayerData = (layerId, newData) => {
    setLayers(layers.map((layer) => (layer.id === layerId ? { ...layer, data: newData } : layer)));
  };

  // Clear canvas
  const handleClear = () => {
    if (window.confirm('Clear all layers? This cannot be undone.')) {
      setLayers([{ id: Date.now(), name: 'Layer 1', visible: true, locked: false, data: [] }]);
      setHistory([]);
      setHistoryStep(-1);
    }
  };

  // Export to image
  const handleExportImage = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const link = document.createElement('a');
      link.download = `whiteboard-${Date.now()}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  // Export to PDF (using html2canvas approach)
  const handleExportPDF = async () => {
    if (canvasRef.current) {
      try {
        const canvas = canvasRef.current;
        const imgData = canvas.toDataURL('image/png');

        // Create a simple PDF export using a new window
        const pdfWindow = window.open('', '_blank');
        pdfWindow.document.write(`
          <html>
            <head><title>Whiteboard Export</title></head>
            <body style="margin:0;padding:20px;">
              <img src="${imgData}" style="max-width:100%;height:auto;" />
              <script>
                window.onload = function() {
                  window.print();
                };
              </script>
            </body>
          </html>
        `);
        pdfWindow.document.close();
      } catch (error) {
        console.error('Export failed:', error);
        alert('Export failed. Please try again.');
      }
    }
  };

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body virtual-whiteboard">
        <div className="whiteboard-container">
          <Toolbar
            canRedo={historyStep < history.length - 1}
            canUndo={historyStep > 0}
            color={color}
            fillColor={fillColor}
            fontSize={fontSize}
            lineWidth={lineWidth}
            setColor={setColor}
            setFillColor={setFillColor}
            setFontSize={setFontSize}
            setLineWidth={setLineWidth}
            setTool={setTool}
            tool={tool}
            onClear={handleClear}
            onExportImage={handleExportImage}
            onExportPDF={handleExportPDF}
            onRedo={handleRedo}
            onUndo={handleUndo}
          />

          <div className="whiteboard-main">
            <Canvas
              activeLayerId={activeLayerId}
              color={color}
              fillColor={fillColor}
              fontSize={fontSize}
              layers={layers}
              lineWidth={lineWidth}
              ref={canvasRef}
              saveToHistory={saveToHistory}
              tool={tool}
              updateLayerData={updateLayerData}
            />

            <LayerPanel
              activeLayerId={activeLayerId}
              layers={layers}
              setActiveLayerId={setActiveLayerId}
              onAddLayer={addLayer}
              onDeleteLayer={deleteLayer}
              onRenameLayer={renameLayer}
              onToggleLock={toggleLayerLock}
              onToggleVisibility={toggleLayerVisibility}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualWhiteboard;
