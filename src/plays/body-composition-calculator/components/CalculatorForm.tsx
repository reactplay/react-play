import React, { ChangeEvent } from 'react';
import { FormData, Gender, ActivityLevel } from '../types';

interface CalculatorFormProps {
  formData: FormData;
  onChange: (field: keyof FormData, value: string) => void;
}

/**
 * Calculator Form
 *
 * Responsible for rendering and managing all input fields.
 * This is a presentational component with no business logic.
 */
const CalculatorForm: React.FC<CalculatorFormProps> = ({ formData, onChange }) => {
  /**
   * Handle select change safely with typing
   */
  const handleGenderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange('gender', event.target.value as Gender);
  };

  const handleActivityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange('activityLevel', event.target.value as ActivityLevel);
  };

  /**
   * Handle numeric input changes
   */
  const handleWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange('weight', event.target.value);
  };

  const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange('height', event.target.value);
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange('age', event.target.value);
  };

  return (
    <div className="form">
      {/* Gender*/}
      <label>
        Gender
        <select value={formData.gender} onChange={handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      {/* Weight*/}
      <label>
        Weight (kg)
        <input
          min="40"
          placeholder="Enter weight"
          type="number"
          value={formData.weight}
          onChange={handleWeightChange}
        />
      </label>

      {/* Height*/}
      <label>
        Height (cm)
        <input
          min="70"
          placeholder="Enter Height"
          type="number"
          value={formData.height}
          onChange={handleHeightChange}
        />
      </label>

      {/* Age*/}
      <label>
        Age
        <input
          min="10"
          placeholder="Enter Age"
          type="number"
          value={formData.age}
          onChange={handleAgeChange}
        />
      </label>

      {/* Activity Level */}
      <label>
        Activity Level
        <select value={formData.activityLevel} onChange={handleActivityChange}>
          <option value="sedentary">Sedentary (little or no exercise)</option>
          <option value="light">Light (1-3 days/week)</option>
          <option value="moderate">Moderate (3-5 days/week)</option>
          <option value="active">Active (6-7 days/week)</option>
          <option value="very_active">Very Active (physical job or intense training)</option>
        </select>
      </label>
    </div>
  );
};

export default CalculatorForm;
