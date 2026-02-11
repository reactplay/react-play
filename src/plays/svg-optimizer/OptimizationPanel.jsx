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
            type="checkbox"
            onChange={() => handleToggle('removeComments')}
          />
          <span>Remove Comments</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeMetadata}
            type="checkbox"
            onChange={() => handleToggle('removeMetadata')}
          />
          <span>Remove Metadata</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeHiddenElements}
            type="checkbox"
            onChange={() => handleToggle('removeHiddenElements')}
          />
          <span>Remove Hidden Elements</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeEmptyAttributes}
            type="checkbox"
            onChange={() => handleToggle('removeEmptyAttributes')}
          />
          <span>Remove Empty Attributes</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.minifyColors}
            type="checkbox"
            onChange={() => handleToggle('minifyColors')}
          />
          <span>Minify Colors</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeDefaultAttributes}
            type="checkbox"
            onChange={() => handleToggle('removeDefaultAttributes')}
          />
          <span>Remove Default Values</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.removeXMLNS}
            type="checkbox"
            onChange={() => handleToggle('removeXMLNS')}
          />
          <span>Remove XMLNS</span>
        </label>

        <label className="svg-option-item">
          <input
            checked={options.prettify}
            type="checkbox"
            onChange={() => handleToggle('prettify')}
          />
          <span>Prettify Output</span>
        </label>
      </div>
    </div>
  );
}

export default OptimizationPanel;
