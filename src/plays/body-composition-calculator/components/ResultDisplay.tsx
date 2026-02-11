import React from 'react';

interface ResultDisplayProps {
  bmr: number | null;
  tdee: number | null;
}

/**
 * ResultDisplay Component
 *
 * Displays calculated BMR and TDEE values.
 * Pure Presentational component.
 */
const ResultDisplay: React.FC<ResultDisplayProps> = ({ bmr, tdee }) => {
  /**
   * Format number Safely
   */
  const formatValue = (value: number | null): string => {
    if (value === null || Number.isNaN(value)) {
      return '--';
    }

    return `${Math.round(value)} kcal/day`;
  };

  return (
    <div className="result-container">
      <h3>Results</h3>

      <div className="result-item">
        <span className="label">BMR</span>
        <span className="value">{formatValue(bmr)}</span>
      </div>

      <div className="result-item">
        <span className="label">TDEE</span>
        <span className="value">{formatValue(tdee)}</span>
      </div>

      {bmr === null && <p className="hint">Enter weight, height, and age to calculate.</p>}
    </div>
  );
};

export default ResultDisplay;
