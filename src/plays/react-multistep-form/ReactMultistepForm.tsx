import React from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import { useMultistepForm } from './customHook/useMultistepForm';
import PersonalInfo from './personalInfo';
import ContactInfo from './contactInfo';
import AccountInfo from './accountInfo';
import { FormEvent, useState } from 'react';
import './react-multistep-form.css';
type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
};
const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  address: '',
  email: '',
  password: ''
};

function ReactMultistepForm(props: any) {
  const [data, setData] = useState(INITIAL_DATA);
  const [showReview, setShowReview] = useState(false);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { isLastStep, isFirstStep, currentStepIndex, step, next, back, totalSteps } =
    useMultistepForm([
      <PersonalInfo {...data} updateField={updateFields} />,
      <ContactInfo {...data} updateField={updateFields} />,
      <AccountInfo {...data} updateField={updateFields} />
    ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();

    setShowReview(true);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body ">
          {!showReview && (
            <div className="container multistep-container">
              <form onSubmit={handleSubmit}>
                <div className="steps">
                  {currentStepIndex + 1}/{totalSteps}
                </div>
                {step}
                <div className="form-steps">
                  {!isFirstStep && (
                    <button className="multistep-button" type="button" onClick={back}>
                      Back
                    </button>
                  )}

                  <button className="multistep-button" type="submit">
                    {isLastStep ? 'Finish' : 'Next'}
                  </button>
                </div>
              </form>
            </div>
          )}
          {showReview && (
            <div className="container multistep-container">
              <div>
                <h5>Thank you for submitting. Please review your details.</h5>
                <p>First Name: {data.firstName}</p>
                <p>Last Name: {data.lastName}</p>
                <p>Address: {data.address}</p>
                <p>Email: {data.email}</p>
              </div>
              <div className="form-steps">
                <button
                  className="multistep-button"
                  type="button"
                  onClick={() => {
                    setShowReview(false);
                  }}
                >
                  Back
                </button>
              </div>
              <div>
                <p>Please press Back button to edit your details.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ReactMultistepForm;
