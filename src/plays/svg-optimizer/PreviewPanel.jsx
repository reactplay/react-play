import React, { useState } from 'react';

function PreviewPanel({ originalSvg, optimizedSvg }) {
  const [activePreview, setActivePreview] = useState('optimized');

  const renderSVG = (svgString) => {
    if (!svgString) {
      return <div className="svg-preview-placeholder">No SVG to preview</div>;
    }

    try {
      return <div dangerouslySetInnerHTML={{ __html: svgString }} />;
    } catch (error) {
      return <div className="svg-preview-error">Error rendering SVG preview</div>;
    }
  };

  return (
    <div className="svg-preview-section">
      <div className="svg-preview-header">
        <h3>Visual Preview</h3>
        <div className="svg-preview-tabs">
          <button
            className={`svg-tab-btn ${activePreview === 'original' ? 'active' : ''}`}
            onClick={() => setActivePreview('original')}
            type="button"
          >
            Original
          </button>
          <button
            className={`svg-tab-btn ${activePreview === 'optimized' ? 'active' : ''}`}
            onClick={() => setActivePreview('optimized')}
            type="button"
          >
            Optimized
          </button>
          <button
            className={`svg-tab-btn ${activePreview === 'comparison' ? 'active' : ''}`}
            onClick={() => setActivePreview('comparison')}
            type="button"
          >
            Side by Side
          </button>
        </div>
      </div>

      <div className="svg-preview-content">
        {activePreview === 'original' && (
          <div className="svg-preview-box">{renderSVG(originalSvg)}</div>
        )}

        {activePreview === 'optimized' && (
          <div className="svg-preview-box">{renderSVG(optimizedSvg)}</div>
        )}

        {activePreview === 'comparison' && (
          <div className="svg-preview-comparison">
            <div className="svg-preview-box">
              <h4>Original</h4>
              {renderSVG(originalSvg)}
            </div>
            <div className="svg-preview-box">
              <h4>Optimized</h4>
              {renderSVG(optimizedSvg)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviewPanel;
