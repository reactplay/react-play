import React, { useState } from 'react';
import { FaPlus, FaTrash, FaEye, FaEyeSlash, FaLock, FaUnlock, FaEdit } from 'react-icons/fa';

const LayerPanel = ({
  layers,
  activeLayerId,
  setActiveLayerId,
  onAddLayer,
  onDeleteLayer,
  onToggleVisibility,
  onToggleLock,
  onRenameLayer
}) => {
  const [editingLayerId, setEditingLayerId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleStartEdit = (layer) => {
    setEditingLayerId(layer.id);
    setEditName(layer.name);
  };

  const handleFinishEdit = (layerId) => {
    if (editName.trim()) {
      onRenameLayer(layerId, editName.trim());
    }
    setEditingLayerId(null);
    setEditName('');
  };

  const handleKeyDown = (e, layerId) => {
    if (e.key === 'Enter') {
      handleFinishEdit(layerId);
    } else if (e.key === 'Escape') {
      setEditingLayerId(null);
      setEditName('');
    }
  };

  return (
    <div className="layer-panel">
      <div className="layer-panel-header">
        <h3>Layers</h3>
        <button className="add-layer-btn" title="Add Layer" onClick={onAddLayer}>
          <FaPlus />
        </button>
      </div>

      <div className="layer-list">
        {[...layers].reverse().map((layer) => (
          <div
            className={`layer-item ${activeLayerId === layer.id ? 'active' : ''} ${
              layer.locked ? 'locked' : ''
            }`}
            key={layer.id}
            onClick={() => !layer.locked && setActiveLayerId(layer.id)}
          >
            <div className="layer-controls">
              <button
                className="layer-control-btn"
                title={layer.visible ? 'Hide Layer' : 'Show Layer'}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleVisibility(layer.id);
                }}
              >
                {layer.visible ? <FaEye /> : <FaEyeSlash />}
              </button>

              <button
                className="layer-control-btn"
                title={layer.locked ? 'Unlock Layer' : 'Lock Layer'}
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleLock(layer.id);
                }}
              >
                {layer.locked ? <FaLock /> : <FaUnlock />}
              </button>
            </div>

            <div className="layer-info">
              {editingLayerId === layer.id ? (
                <input
                  autoFocus
                  className="layer-name-input"
                  type="text"
                  value={editName}
                  onBlur={() => handleFinishEdit(layer.id)}
                  onChange={(e) => setEditName(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => handleKeyDown(e, layer.id)}
                />
              ) : (
                <span className="layer-name">{layer.name}</span>
              )}

              <div className="layer-stats">
                {layer.data.length} object{layer.data.length !== 1 ? 's' : ''}
              </div>
            </div>

            <div className="layer-actions">
              <button
                className="layer-action-btn"
                title="Rename Layer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStartEdit(layer);
                }}
              >
                <FaEdit />
              </button>

              {layers.length > 1 && (
                <button
                  className="layer-action-btn danger"
                  title="Delete Layer"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm(`Delete "${layer.name}"?`)) {
                      onDeleteLayer(layer.id);
                    }
                  }}
                >
                  <FaTrash />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="layer-info-box">
        <h4>Layer Tips</h4>
        <ul>
          <li>Click a layer to make it active</li>
          <li>Use 👁️ to show/hide layers</li>
          <li>Use 🔒 to lock/unlock layers</li>
          <li>Locked layers can't be edited</li>
        </ul>
      </div>
    </div>
  );
};

export default LayerPanel;
