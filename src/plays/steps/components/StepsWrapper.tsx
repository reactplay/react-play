import React, { useState } from 'react';

import StepMessage from './StepMessage';
import Button from './Button';

export default function StepsWrapper() {
  const [step, setStep] = useState(1);

  const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      <div className="steps">
        <div className="steps_numbers">
          <div className={step >= 1 ? 'steps_active' : ''}>1</div>
          <div className={step >= 2 ? 'steps_active' : ''}>2</div>
          <div className={step >= 3 ? 'steps_active' : ''}>3</div>
        </div>

        <StepMessage step={step}>{messages[step - 1]}</StepMessage>

        <div className="steps_buttons">
          <Button bgColor="#7950f2" disable={step === 1} textColor="#fff" onClick={handlePrevious}>
            <span>👈</span> Previous
          </Button>

          <Button bgColor="#7950f2" disable={step === 3} textColor="#fff" onClick={handleNext}>
            Next <span>👉</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
