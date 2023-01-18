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
          <div className="container multistep-play">
            {!showReview && (
              <form className="multistep-play-form" onSubmit={handleSubmit}>
                <div className="steps">
                  {currentStepIndex + 1}/{totalSteps}
                </div>
                {step}
                <div className="button-container">
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
            )}
            {showReview && (
              <>
                <div className="review-container">
                  <h5 className="message-heading">
                    Thank you for submitting. Please review your details.
                  </h5>
                  <p className="user-info">
                    First Name: <span className="user-info-value">{data.firstName}</span>
                  </p>
                  <p className="user-info">
                    Last Name: <span className="user-info-value">{data.lastName}</span>
                  </p>
                  <p className="user-info">
                    Address: <span className="user-info-value">{data.address}</span>
                  </p>
                  <p className="user-info">
                    Email: <span className="user-info-value">{data.email}</span>
                  </p>
                </div>
                <div className="button-container">
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
                <div className="press-back-button-message">
                  <p>Please press Back button to edit your details.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactMultistepForm;
