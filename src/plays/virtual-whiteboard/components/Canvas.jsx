import React, { useEffect, useState, forwardRef } from 'react';

const Canvas = forwardRef(
  (
    {
      layers,
      activeLayerId,
      tool,
      color,
      lineWidth,
      fillColor,
      fontSize,
      updateLayerData,
      saveToHistory
    },
    ref
  ) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const [startPos, setStartPos] = useState({ x: 0, y: 0 });
    const [currentShape, setCurrentShape] = useState(null);

    const activeLayer = layers.find((layer) => layer.id === activeLayerId);

    useEffect(() => {
      const canvas = ref.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw all visible layers
      layers.forEach((layer) => {
        if (layer.visible) {
          layer.data.forEach((item) => {
            drawItem(ctx, item);
          });
        }
      });

      // Draw current shape being created
      if (currentShape) {
        drawItem(ctx, currentShape);
      }
    }, [layers, currentShape]);

    // Keyboard shortcuts
    useEffect(() => {
      const handleKeyDown = (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
          e.preventDefault();
          // Undo handled in parent
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'y') {
          e.preventDefault();
          // Redo handled in parent
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const drawItem = (ctx, item) => {
      ctx.strokeStyle = item.color;
      ctx.lineWidth = item.lineWidth;
      ctx.fillStyle = item.fillColor || 'transparent';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      switch (item.type) {
        case 'pen':
          ctx.beginPath();
          item.points.forEach((point, index) => {
            if (index === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          });
          ctx.stroke();

          break;

        case 'eraser':
          ctx.save();
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          item.points.forEach((point, index) => {
            if (index === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          });
          ctx.lineWidth = item.lineWidth * 2;
          ctx.stroke();
          ctx.restore();

          break;

        case 'line':
          ctx.beginPath();
          ctx.moveTo(item.startX, item.startY);
          ctx.lineTo(item.endX, item.endY);
          ctx.stroke();

          break;

        case 'rectangle': {
          const width = item.endX - item.startX;
          const height = item.endY - item.startY;
          if (item.fillColor && item.fillColor !== '#ffffff') {
            ctx.fillRect(item.startX, item.startY, width, height);
          }
          ctx.strokeRect(item.startX, item.startY, width, height);

          break;
        }

        case 'circle': {
          const radius = Math.sqrt(
            Math.pow(item.endX - item.startX, 2) + Math.pow(item.endY - item.startY, 2)
          );
          ctx.beginPath();
          ctx.arc(item.startX, item.startY, radius, 0, 2 * Math.PI);
          if (item.fillColor && item.fillColor !== '#ffffff') {
            ctx.fill();
          }
          ctx.stroke();

          break;
        }

        case 'text':
          ctx.font = `${item.fontSize}px Arial`;
          ctx.fillStyle = item.color;
          ctx.fillText(item.text, item.x, item.y);

          break;

        default:
          break;
      }
    };

    const getMousePos = (e) => {
      const canvas = ref.current;
      const rect = canvas.getBoundingClientRect();

      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseDown = (e) => {
      if (!activeLayer || activeLayer.locked) return;

      const pos = getMousePos(e);
      setIsDrawing(true);
      setStartPos(pos);

      if (tool === 'pen' || tool === 'eraser') {
        const newItem = {
          type: tool,
          color: color,
          lineWidth: lineWidth,
          points: [pos]
        };
        setCurrentShape(newItem);
      } else if (tool === 'text') {
        const text = prompt('Enter text:');
        if (text) {
          const newItem = {
            type: 'text',
            text: text,
            x: pos.x,
            y: pos.y,
            color: color,
            fontSize: fontSize
          };
          const newData = [...activeLayer.data, newItem];
          updateLayerData(activeLayerId, newData);
          saveToHistory();
        }
      }
    };

    const handleMouseMove = (e) => {
      if (!isDrawing || !activeLayer || activeLayer.locked) return;

      const pos = getMousePos(e);

      if (tool === 'pen' || tool === 'eraser') {
        setCurrentShape((prev) => ({
          ...prev,
          points: [...prev.points, pos]
        }));
      } else if (tool === 'line' || tool === 'rectangle' || tool === 'circle') {
        setCurrentShape({
          type: tool,
          startX: startPos.x,
          startY: startPos.y,
          endX: pos.x,
          endY: pos.y,
          color: color,
          lineWidth: lineWidth,
          fillColor: fillColor
        });
      }
    };

    const handleMouseUp = () => {
      if (!isDrawing || !currentShape || !activeLayer || activeLayer.locked) {
        setIsDrawing(false);
        setCurrentShape(null);

        return;
      }

      const newData = [...activeLayer.data, currentShape];
      updateLayerData(activeLayerId, newData);
      saveToHistory();

      setIsDrawing(false);
      setCurrentShape(null);
    };

    const handleMouseLeave = () => {
      if (isDrawing) {
        handleMouseUp();
      }
    };

    return (
      <div className="canvas-container">
        <canvas
          className="whiteboard-canvas"
          height={700}
          ref={ref}
          width={1200}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
        {activeLayer && activeLayer.locked && (
          <div className="canvas-overlay">
            <div className="lock-message">🔒 Layer is locked</div>
          </div>
        )}
      </div>
    );
  }
);

Canvas.displayName = 'Canvas';

export default Canvas;
