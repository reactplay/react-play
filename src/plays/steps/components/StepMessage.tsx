import React from 'react';

interface StepMessageProps {
  step: number;
  children: React.ReactNode;
}

export default function StepMessage({ step, children }: StepMessageProps) {
  return (
    <div className="steps_message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
