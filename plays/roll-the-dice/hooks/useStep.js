import { useState } from 'react';

export const useStep = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Previous step
  function prev() {
    setCurrentStep((prevStep) => {
      if (prevStep <= 0) return prevStep;

      return prevStep - 1;
    });
  }

  // Next step
  function next() {
    setCurrentStep((prevStep) => {
      if (prevStep >= steps.length - 1) return prevStep;

      return prevStep + 1;
    });
  }

  // Reset step
  function resetStep() {
    setCurrentStep(0);
  }

  // Return
  return {
    currentStep,
    step: steps[currentStep],
    prev,
    next,
    resetStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    stepIndex: currentStep
  };
};
