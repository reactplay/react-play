import React from "react";
import { useMultistepForm } from "./customHook/useMultistepForm";
import PersonalInfo from "./personalInfo";
import ContactInfo from "./contactInfo";
import AccountInfo from "./accountInfo";
import { FormEvent, useState } from "react";
import "./react-multistep-form.css";
type FormData = {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  password: string;
};
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  address: "",
  email: "",
  password: "",
};

function ReactMultistepForm() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    isLastStep,
    isFirstStep,
    currentStepIndex,
    step,
    next,
    back,
    totalSteps,
  } = useMultistepForm([
    <PersonalInfo {...data} updateField={updateFields} />,
    <ContactInfo {...data} updateField={updateFields} />,
    <AccountInfo {...data} updateField={updateFields} />,
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();

    alert(JSON.stringify(data));
  };
  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='steps'>
            {currentStepIndex + 1}/{totalSteps}
          </div>
          {step}
          <div className='form-steps'>
            {!isFirstStep && (
              <button className='btn' type={"button"} onClick={back}>
                Back
              </button>
            )}

            <button className='btn' type={"submit"}>
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ReactMultistepForm;
