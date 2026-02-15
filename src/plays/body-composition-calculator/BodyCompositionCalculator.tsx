import React, { useMemo, useState } from 'react';

import './styles/styles.css';
import CalculatorForm from './components/CalculatorForm';
import ResultDisplay from './components/ResultDisplay';

import { calculateBMR, calculateTDEE } from './utils/healthUtils';
import { FormData } from './types';

const BodyCompositionCalculator: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    gender: 'male',
    weight: '',
    height: '',
    age: '',
    activityLevel: 'sedentary'
  });

  /**
   * Generic handler for updating form state
   */
  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  /**
   * Convert Inputs Safely
   */
  const numericWeight = Number(formData.weight);
  const numericHeight = Number(formData.height);
  const numericAge = Number(formData.age);

  const isValid = numericWeight > 0 && numericHeight > 0 && numericAge > 0;

  /**
   * Derived BMR
   */
  const bmr = useMemo(() => {
    if (!isValid) return null;

    return calculateBMR({
      gender: formData.gender,
      weight: numericWeight,
      height: numericHeight,
      age: numericAge
    });
  }, [formData.gender, numericWeight, numericHeight, numericAge, isValid]);

  /**
   * Derived TDEE
   */
  const tdee = useMemo(() => {
    if (!bmr) return null;

    return calculateTDEE(bmr, formData.activityLevel);
  }, [bmr, formData.activityLevel]);

  return (
    <div className="container">
      <h2 className="calculator-title">BMR & TDEE Calculator</h2>

      <p className="calculator-summary">
        <strong>BMR (Basal Metabolic Rate)</strong> is the number of calories your body needs at
        complete rest to maintain essential functions such as breathing, circulation, and
        temperature regulation.
        <br />
        <br />
        <strong>TDEE (Total Daily Energy Expenditure)</strong> is the total number of calories your
        body burns in a day, including all physical activities like walking, exercise, and daily
        tasks.
      </p>
      <CalculatorForm formData={formData} onChange={handleChange} />

      <ResultDisplay bmr={bmr} tdee={tdee} />
    </div>
  );
};

export default BodyCompositionCalculator;
