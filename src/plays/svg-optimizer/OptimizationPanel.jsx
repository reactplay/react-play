import React from 'react';

function OptimizationPanel({ options, onChange }) {
  const handleToggle = (optionKey) => {
    onChange({
      ...options,
      [optionKey]: !options[optionKey]
    });
  };

  return (
    <div className="svg-optimization-panel">
      <h3>Optimization Options</h3>
      <div className="svg-options-grid">
        <label className="svg-option-item">
          <input
            checked={options.removeComments}
            onChange={() => handleToggle('removeComments')}
            type="checkbox"
          />
          <span>Remove Comments</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeMetadata}
            onChange={() => handleToggle('removeMetadata')}
            type="checkbox"
          />
          <span>Remove Metadata</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeHiddenElements}
            onChange={() => handleToggle('removeHiddenElements')}
            type="checkbox"
          />
          <span>Remove Hidden Elements</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeEmptyAttributes}
            onChange={() => handleToggle('removeEmptyAttributes')}
            type="checkbox"
          />
          <span>Remove Empty Attributes</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.minifyColors}
            onChange={() => handleToggle('minifyColors')}
            type="checkbox"
          />
          <span>Minify Colors</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeDefaultAttributes}
            onChange={() => handleToggle('removeDefaultAttributes')}
            type="checkbox"
          />
          <span>Remove Default Values</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeXMLNS}
            onChange={() => handleToggle('removeXMLNS')}
            type="checkbox"
          />
          <span>Remove XMLNS</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.prettify}
            onChange={() => handleToggle('prettify')}
            type="checkbox"
          />
          <span>Prettify Output</span>
        </label>
      </div>
    </div>
  );
}

export default OptimizationPanel;
